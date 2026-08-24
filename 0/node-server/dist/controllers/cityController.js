"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityById = exports.getCities = void 0;
exports.addCity = addCity;
exports.updateCity = updateCity;
exports.deleteCity = deleteCity;
const db_1 = __importDefault(require("../db"));
const getCities = async (req, res) => {
    try {
        const cities = await (0, db_1.default) `SELECT * FROM cities`;
        res.json(cities);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get cities' });
    }
};
exports.getCities = getCities;
const getCityById = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await (0, db_1.default) `SELECT * FROM cities WHERE city_id = ${id}`;
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get city' });
    }
};
exports.getCityById = getCityById;
async function addCity(req, res) {
    try {
        const { city_name } = req.body;
        const city = await (0, db_1.default) `
        INSERT INTO cities (city_name)
        VALUES (${city_name})
        RETURNING *
      `;
        res.status(201).json(city);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to create city'
        });
    }
}
async function updateCity(req, res) {
    try {
        const { id } = req.params;
        const { city_name } = req.body;
        const city = await (0, db_1.default) `UPDATE cities SET city_name = ${city_name} WHERE city_id = ${id} RETURNING *`;
        res.json(city);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update city' });
    }
}
async function deleteCity(req, res) {
    try {
        const { id } = req.params;
        const city = await (0, db_1.default) `
        DELETE FROM cities
        WHERE city_id = ${id}
        RETURNING *
      `;
        res.json(city);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to delete city'
        });
    }
}
