"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cityRoutes_1 = __importDefault(require("./routes/cityRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/cities', cityRoutes_1.default);
app.use('/courses', courseRoutes_1.default);
app.use('/users', userRoutes_1.default);
const server = app.listen(3002, () => {
    console.log(`http://localhost:${3002}`);
});
