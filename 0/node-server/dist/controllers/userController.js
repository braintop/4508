"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../db"));
async function register(req, res) {
    try {
        const { user_name, email, password } = req.body;
        if (!user_name || !email || !password) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }
        const existingUsers = await (0, db_1.default) `
        SELECT *
        FROM users
        WHERE email = ${email}
      `;
        if (existingUsers.length > 0) {
            return res.status(400).json({
                error: 'Email already exists'
            });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const users = await (0, db_1.default) `
        INSERT INTO users (
          user_name,
          email,
          password
        )
        VALUES (
          ${user_name},
          ${email},
          ${hashedPassword}
        )
        RETURNING user_id, user_name, email, role
      `;
        res.status(201).json(users[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to register'
        });
    }
}
async function login(req, res) {
    try {
        console.log(req.user);
        //(req as any) is used to access the user property of the request object
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password are required'
            });
        }
        const users = await (0, db_1.default) `
        SELECT *
        FROM users
        WHERE email = ${email}
      `;
        if (users.length === 0) {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }
        const user = users[0];
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET is not set');
        }
        const token = jsonwebtoken_1.default.sign({
            user_id: user.user_id,
            email: user.email,
            role: user.role
        }, secret, {
            expiresIn: '1h'
        });
        res.json({
            token,
            user: {
                user_id: user.user_id,
                user_name: user.user_name,
                email: user.email,
                role: user.role
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to login'
        });
    }
}
