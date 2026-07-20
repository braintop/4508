import { Request, Response } from 'express';
import mongoose, { type ConnectOptions } from 'mongoose';
import express from 'express';
import { CarModel } from './models/CarModel';
import { FlightModel } from './models/FlightModel';
//npm i dotenv
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.use(express.json());
const uri = process.env.URI;
if (!uri) {
  throw new Error('URI is not defined');
}

const clientOptions: ConnectOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};
async function run(): Promise<void> {

  try {
    await mongoose.connect(uri as string, clientOptions);

    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('Database connection is not available');
    }

    await db.admin().command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    //await mongoose.disconnect();
  }
}
run().catch(console.dir);


app.post('/api/cars', async (req: Request, res: Response) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  const car = await CarModel.create({ name, price });
  res.status(201).json(car);
});

app.get('/api/cars', async (req: Request, res: Response) => {
  const cars = await CarModel.find();
  res.status(200).json(cars);
});

app.delete('/api/cars/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const car = await CarModel.findByIdAndDelete(id);
  if (!car) {
    return res.status(404).json({ message: 'Car not found' });
  }
  res.status(200).json(car);
});

app.put('/api/cars/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const car = await CarModel.findByIdAndUpdate(id, { name, price }, { new: true });
  if (!car) {
    return res.status(404).json({ message: 'Car not found' });
  }
  res.status(200).json(car);
});



app.post('/api/flights', async (req: Request, res: Response) => {
  const { price, from, to, pilotName } = req.body;
  const flight = await FlightModel.create({ price, from, to, pilotName });
  res.status(201).json(flight);
});

app.get('/api/flights', async (req: Request, res: Response) => {
  const flights = await FlightModel.find();
  res.status(200).json(flights);
});
app.put('/api/flights/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { price, from, to, pilotName } = req.body;
  const flight = await FlightModel.findByIdAndUpdate(id, { price, from, to, pilotName }, { new: true });
  if (!flight) {
    return res.status(404).json({ message: 'Flight not found' });
  }
  res.status(200).json(flight);
});
app.delete('/api/flights/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const flight = await FlightModel.findByIdAndDelete(id);
  if (!flight) {
    return res.status(404).json({ message: 'Flight not found' });
  }
  res.status(200).json(flight);
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});