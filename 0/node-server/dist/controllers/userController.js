"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
const bcrypt_1 = __importDefault(require("bcrypt"));
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
