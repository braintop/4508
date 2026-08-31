"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseById = exports.getCourses = void 0;
exports.addCourse = addCourse;
exports.updateCourse = updateCourse;
exports.deleteCourse = deleteCourse;
const db_1 = __importDefault(require("../db"));
const getCourses = async (req, res) => {
    try {
        //let user = req.user as any
        const courses = await (0, db_1.default) `SELECT * FROM courses`;
        res.json(courses);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get courses' });
    }
};
exports.getCourses = getCourses;
const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await (0, db_1.default) `SELECT * FROM courses WHERE course_id = ${id}`;
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get course' });
    }
};
exports.getCourseById = getCourseById;
async function addCourse(req, res) {
    try {
        const { name, description, price } = req.body;
        const course = await (0, db_1.default) `INSERT INTO courses (name, description, price) VALUES (${name}, ${description}, ${price})`;
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add course' });
    }
}
async function updateCourse(req, res) {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const course = await (0, db_1.default) `UPDATE courses SET name = ${name}, description = ${description}, price = ${price} WHERE course_id = ${id}`;
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update course' });
    }
}
async function deleteCourse(req, res) {
    try {
        const { id } = req.params;
        const course = await (0, db_1.default) `DELETE FROM courses WHERE course_id = ${id}`;
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete course' });
    }
}
