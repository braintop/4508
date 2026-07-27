import mongoose, { type ConnectOptions } from 'mongoose';
import express from 'express';
//npm i dotenv
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
const app = express();
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
app.use('/api/users', userRoutes);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});