import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';
 
export const hashPassword = async (req: Request, res: Response, next:NextFunction) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    next();
    
}


export const isAdmin = async (req: Request, res: Response, next:NextFunction) => {
    const { id } = req.body;
    const user = await UserModel.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    if (user.role !== 'admin') {    
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}