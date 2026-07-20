import { Request, Response } from 'express';
import mongoose, { type ConnectOptions } from 'mongoose';
import express from 'express';
const app = express();
app.use(express.json());
const uri: string =
  'mongodb+srv://david:Aa123456@cluster0.pzqsa4v.mongodb.net/?appName=Cluster0';

const clientOptions: ConnectOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function run(): Promise<void> {
  try {
    await mongoose.connect(uri, clientOptions);

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
