import { NextFunction, Request, Response } from 'express';
import mongoose, { type ConnectOptions } from 'mongoose';
import express from 'express';
//npm i dotenv
import dotenv from 'dotenv';
import carRoutes from './routes/carRoutes';
import flightRoutes from './routes/flightRoute';
import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';
const app = express();

function printTime(req: Request, res: Response, next: NextFunction) {
  const now = new Date();
  console.log(now.toLocaleString()); 
  next();
}
app.use(printTime);// app.use means middleware
app.use((req, res, next) => {
  console.log('method:', req.method);
  next();
});
app.use((req, res, next) => {
  console.log('url:', req.originalUrl);
  next();
});
function logOriginalUrl(req: Request, res: Response, next: NextFunction) {
  (req as any).role = 'user';
  console.log('Request URL:', req.originalUrl);
  next();
}
function logMethod(req: Request, res: Response, next: NextFunction) {
  console.log('Request Type:', req.method);
  next();
}

function isAdmin(req: Request, res: Response, next: NextFunction) {
  if ((req as any).role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Unauthorized' });
  }
}
const logStuff = [logOriginalUrl, logMethod];

app.listen(3000);



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


app.use('/api/cars', logStuff, carRoutes);
app.use('/api/flights',logMethod, isAdmin, flightRoutes);
app.use('/api/books', isAdmin, bookRoutes);
app.use('/api/users', userRoutes);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});