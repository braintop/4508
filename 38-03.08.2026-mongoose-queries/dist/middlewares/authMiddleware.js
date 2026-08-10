"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        res.status(401).json({
            message: 'Token is required',
        });
        return;
    }
    const token = authorizationHeader.split(' ')[1]; //Bearer dwdwdwdwdwdwdwd
    console.log(token);
    if (!token) {
        res.status(401).json({
            message: 'Token is required',
        });
        return;
    }
    const secret = process.env.JWT_SECRET;
    console.log("secret", secret);
    if (!secret) {
        res.status(500).json({
            message: 'JWT secret is not defined',
        });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        //   console.log("decoded",decoded);
        // GET requests often have no body, so req.body can be undefined
        req.body = req.body ?? {};
        req.body.currentUser = decoded;
        // console.log("req.body.currentUser",req.body.currentUser);
        next();
    }
    catch (error) {
        console.log("error", error);
        res.status(401).json({
            message: 'Invalid or expired token',
        });
    }
};
exports.checkToken = checkToken;
