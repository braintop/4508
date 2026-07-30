"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.getUserById = exports.updateUser = exports.deleteUser = exports.getUsers = exports.registerUser = void 0;
const UserModel_1 = require("../models/UserModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//npm i bcrypt
//npm i -D @types/bcrypt
const registerUser = async (req, res) => {
    const { username, email, password, age, isActive, role } = req.body;
    const user = await UserModel_1.UserModel.create({ username, email, password, age, isActive, role });
    res.status(201).json(user);
};
exports.registerUser = registerUser;
const getUsers = async (req, res) => {
    const users = await UserModel_1.UserModel.find();
    res.status(200).json(users);
};
exports.getUsers = getUsers;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel_1.UserModel.findByIdAndDelete(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
};
exports.deleteUser = deleteUser;
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password, age, isActive } = req.body;
    const user = await UserModel_1.UserModel.findByIdAndUpdate(id, { username, email, password, age, isActive }, { new: true });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
};
exports.updateUser = updateUser;
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel_1.UserModel.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
};
exports.getUserById = getUserById;
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel_1.UserModel.findOne({ email });
        if (!user) {
            res.status(401).json({
                message: 'Invalid email or password',
            });
            return;
        }
        const isPasswordCorrect = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(401).json({
                message: 'Invalid email or password',
            });
            return;
        }
        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
            res.status(500).json({
                message: 'Server error',
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ email }, secretKey, { expiresIn: '1h' });
        if (!isPasswordCorrect) {
            res.status(401).json({
                message: 'Invalid email or password',
            });
            return;
        }
        res.status(200).json({
            message: 'Login successful',
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server error',
        });
    }
};
exports.loginUser = loginUser;
