"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.hashPassword = void 0;
const UserModel_1 = require("../models/UserModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = async (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    req.body.password = hashedPassword;
    next();
};
exports.hashPassword = hashPassword;
const isAdmin = async (req, res, next) => {
    const { id } = req.body;
    const user = await UserModel_1.UserModel.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
};
exports.isAdmin = isAdmin;
