import {Request, Response} from 'express';
import mongoose, { type ConnectOptions } from 'mongoose';
import { UserModel } from './models/UserSchema';
import { ProductModel } from './models/ProductShema';
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
//create a user
app.post('/api/users', async (req: Request, res: Response) => {
  const user = await UserModel.create(req.body);
  if (!user) {
    return res.status(400).json({ message: 'User not created' });
  }
  res.status(201).json(user);
});

//get all users
app.get('/api/users', async (req: Request, res: Response) => {
  console.log("message from server");
  const users = await UserModel.find();
  res.status(200).json(users);
});


//get a user by id
app.get('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserModel.findOne({ _id: id });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
});

//update a user by id
app.put('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
});


//delete a user by id
app.delete('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserModel.findByIdAndDelete(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
});

app.post('/api/products', async (req: Request, res: Response) => {
  const product = await ProductModel.create(req.body);
  if (!product) {
    return res.status(400).json({ message: 'Product not created' });
  }
  res.status(201).json(product);
});

app.get('/api/products', async (req: Request, res: Response) => {
  const products = await ProductModel.find();
  res.status(200).json(products);
});

app.get('/api/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params; //{id: '123'}
  const product = await ProductModel.findOne({ _id: id });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
});
app.get('/api/products/:category', async (req: Request, res: Response) => {
  const { category } = req.params;
  const products = await ProductModel.find({ category: category, isAvailable: true });
  res.status(200).json(products);
});
app.put('/api/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
});

app.delete('/api/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await ProductModel.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




//database <=> server node <=> client browser