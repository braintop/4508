"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tempController_1 = require("../conrollers/tempController");
const router = (0, express_1.Router)();
router.get('/seed', tempController_1.seedDatabase);
exports.default = router;
