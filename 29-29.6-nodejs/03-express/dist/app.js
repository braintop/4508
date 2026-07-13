"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/firstname', (req, res) => {
    res.send('Hello, Asaf!');
});
app.get('/students', (req, res) => {
    res.send('Hello, Sharon elad!');
});
app.get('/home', (req, res) => {
    res.send('Hello, Home!');
});
//100.0.167.0  
//120.0.0.1:3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
