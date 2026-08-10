"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerController_1 = require("../conrollers/customerController");
const router = (0, express_1.Router)();
router.post('/', customerController_1.createCustomer);
exports.default = router;
