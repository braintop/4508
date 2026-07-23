import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';

export const createUser = async (req: Request, res: Response) => {
    const { username, email, password, age, isActive } = req.body;
    const user = await UserModel.create({ username, email, password, age, isActive });
    res.status(201).json(user);
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await UserModel.find();
    res.status(200).json(users);
}   

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
}
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, email, password, age, isActive } = req.body;
    const user = await UserModel.findByIdAndUpdate(id, { username, email, password, age, isActive }, { new: true });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
}
export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
}