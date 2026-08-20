"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const serverless_1 = require("@neondatabase/serverless");
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = (0, serverless_1.neon)(databaseUrl);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('Hello Node');
});
app.get('/cities', async (_req, res) => {
    try {
        const cities = await sql `SELECT * FROM cities`;
        res.json(cities);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get cities' });
    }
});
app.get('/cities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const city = await sql `SELECT * FROM cities WHERE city_id = ${id}`;
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get city' });
    }
});
app.post('/cities', async (req, res) => {
    try {
        const { city_name } = req.body;
        const city = await sql `INSERT INTO cities (city_name) VALUES (${city_name})`;
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create city' });
    }
});
app.put('/cities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { city_name } = req.body; //{city_name: 'New York'}
        const city = await sql `UPDATE cities SET city_name = ${city_name} WHERE city_id = ${id}`;
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update city' });
    }
});
app.delete('/cities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const city = await sql `DELETE FROM cities WHERE city_id = ${id}`;
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete city' });
    }
});
//======================COURSES======================
app.get('/courses', async (req, res) => {
    try {
        const courses = await sql `SELECT * FROM courses`;
        res.json(courses);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get courses' });
    }
});
app.get('/courses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const course = await sql `SELECT * FROM courses WHERE course_id = ${id}`;
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get course' });
    }
});
app.post('/courses', async (req, res) => {
    try {
        const { course_name } = req.body;
        const course = await sql `INSERT INTO courses (course_name) VALUES (${course_name})`;
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create course' });
    }
});
const server = app.listen(3002, () => {
    console.log(`http://localhost:${3002}`);
});
