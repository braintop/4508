import { Request, Response } from 'express';
import { FlightModel } from '../models/FlightModel';

export const createFlight = async (req: Request, res: Response) => {
  const { price, from, to, pilotName } = req.body;
  const flight = await FlightModel.create({ price, from, to, pilotName });
  res.status(201).json(flight);
};

export const getFlights = async (req: Request, res: Response) => {
  const flights = await FlightModel.find();
  res.status(200).json(flights);
};

export const deleteFlight = async (req: Request, res: Response) => {
  const { id } = req.params;
  const flight = await FlightModel.findByIdAndDelete(id);
  if (!flight) {
    return res.status(404).json({ message: 'Flight not found' });
  }
  res.status(200).json(flight);
};

export const updateFlight = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { price, from, to, pilotName } = req.body;
  const flight = await FlightModel.findByIdAndUpdate(id, { price, from, to, pilotName }, { new: true });
  if (!flight) {
    return res.status(404).json({ message: 'Flight not found' });
  }
  res.status(200).json(flight);
};

