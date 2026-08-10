import mongoose, { type ConnectOptions } from 'mongoose';
import express from 'express';
import tempRoute from './routes/tempRoute';
import bookingRouter from './routes/bookingRouter';
//npm i dotenv
import dotenv from 'dotenv';
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
app.use('/temp', tempRoute);
app.use('/booking', bookingRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});





//npm install --save-dev tsx

    // "dev": "ts-node-dev src/app.ts",
    // "build": "tsc",
    // "start": "node dist/app.js"



        // // "dev": "ts-node-dev src/app.ts",
    // // "build": "tsc",
    // // "start": "node dist/app.js"
    // "dev": "tsx watch src/app.ts",
    // "seed": "tsx src/seed.ts"
