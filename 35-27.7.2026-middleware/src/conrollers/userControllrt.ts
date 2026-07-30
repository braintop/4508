import { Request, Response } from 'express'; 
import { UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';
    //npm i bcrypt
    //npm i -D @types/bcrypt
export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password, age, isActive, role } = req.body;
    const user = await UserModel.create({ username, email, password, age, isActive, role });
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


export const loginUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { email, password } = req.body;
  
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        res.status(401).json({
          message: 'Invalid email or password',
        });
        return;
      }
  
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
      );
  
      if (!isPasswordCorrect) {
        res.status(401).json({
          message: 'Invalid email or password',
        });
        return;
      }
  
      res.status(200).json({
        message: 'Login successful',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  };