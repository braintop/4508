"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = createCustomer;
const customerModel_1 = require("../models/customerModel");
async function createCustomer(req, res) {
    try {
        const customer = await customerModel_1.CustomerModel.create(req.body);
        res.status(201).json(customer);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to create customer',
            error
        });
    }
}
