import { Request, Response } from 'express';
import { CarModel } from '../models/CarModel';

export const createCar = async (req: Request, res: Response) => {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }
    const car = await CarModel.create({ name, price });
    res.status(201).json(car);
  };

  export const getCars =  async (req: Request, res: Response) => {
    const cars = await CarModel.find();
    res.status(200).json(cars);
  };
  
export const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const car = await CarModel.findByIdAndDelete(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  }

export const updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const car = await CarModel.findByIdAndUpdate(id, { name, price }, { new: true });
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  } 