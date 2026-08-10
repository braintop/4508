import { Request, Response } from 'express';
import { CustomerModel } from '../models/customerModel';

export async function createCustomer(
    req: Request,
    res: Response
): Promise<void> {
    try{
        const customer = await CustomerModel.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to create customer',
            error
        });
    }
}