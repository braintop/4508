"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema_1 = require("./models/UserSchema");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const uri = 'mongodb+srv://david:Aa123456@cluster0.pzqsa4v.mongodb.net/?appName=Cluster0';
const clientOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
};
async function run() {
    try {
        await mongoose_1.default.connect(uri, clientOptions);
        const db = mongoose_1.default.connection.db;
        if (!db) {
            throw new Error('Database connection is not available');
        }
        await db.admin().command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    }
    finally {
        //await mongoose.disconnect();
    }
}
run().catch(console.dir);
//create a user
app.post('/api/users', async (req, res) => {
    const user = await UserSchema_1.UserModel.create(req.body);
    if (!user) {
        return res.status(400).json({ message: 'User not created' });
    }
    res.status(201).json(user);
});
//get all users
app.get('/api/users', async (req, res) => {
    console.log("message from server");
    const users = await UserSchema_1.UserModel.find();
    res.status(200).json(users);
});
//get a user by id
app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await UserSchema_1.UserModel.findOne({ _id: id });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//database <=> server node <=> client browser
