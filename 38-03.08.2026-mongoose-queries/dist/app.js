"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const tempRoute_1 = __importDefault(require("./routes/tempRoute"));
const bookingRouter_1 = __importDefault(require("./routes/bookingRouter"));
//npm i dotenv
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.listen(3000);
dotenv_1.default.config();
app.use(express_1.default.json());
const uri = process.env.URI;
if (!uri) {
    throw new Error('URI is not defined');
}
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
app.use('/temp', tempRoute_1.default);
app.use('/booking', bookingRouter_1.default);
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
