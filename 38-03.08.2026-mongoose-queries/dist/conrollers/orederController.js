"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderStatus = exports.getOrdersAbovePrice = exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getOrders = exports.createOrder = void 0;
const OrderModel_1 = require("../models/OrderModel");
const createOrder = async (req, res) => {
    try {
        const { guestName, guestEmail, hotelName, roomNumber, numberOfGuests, checkInDate, checkOutDate, totalPrice, status, breakfastIncluded, } = req.body;
        const order = await OrderModel_1.OrderModel.create({
            guestName,
            guestEmail,
            hotelName,
            roomNumber,
            numberOfGuests,
            checkInDate,
            checkOutDate,
            totalPrice,
            status,
            breakfastIncluded,
        });
        res.status(201).json({
            message: 'Order created successfully',
            order,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server error',
        });
    }
};
exports.createOrder = createOrder;
const getOrders = async (req, res) => {
    try {
        const orders = await OrderModel_1.OrderModel.find();
        console.log(req.body);
        res.status(200).json({
            message: 'Orders fetched successfully',
            orders,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server error',
        });
    }
};
exports.getOrders = getOrders;
const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await OrderModel_1.OrderModel.findById(id);
        if (!order) {
            res.status(404).json({
                message: 'Order not found',
            });
            return;
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({
            message: 'Server error',
        });
    }
};
exports.getOrderById = getOrderById;
const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await OrderModel_1.OrderModel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!order) {
            res.status(404).json({
                message: 'Order not found',
            });
            return;
        }
        res.status(200).json({
            message: 'Order updated successfully',
            order,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server error',
        });
    }
};
exports.updateOrder = updateOrder;
const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await OrderModel_1.OrderModel.findByIdAndDelete(id);
        if (!order) {
            res.status(404).json({
                message: 'Order not found',
            });
            return;
        }
        res.status(200).json({
            message: 'Order deleted successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server error',
        });
    }
};
exports.deleteOrder = deleteOrder;
//   export const getOrdersByStatus = async (
//     req: Request,
//     res: Response
//   ): Promise<void> => {
//     try {
//       const { status } = req.params;
//       const orders = await OrderModel.find({ status:status });
//       res.status(200).json(orders);
//     } catch (error) {
//       res.status(500).json({
//         message: 'Server error',
//       });
//     }
//   };
const getOrdersAbovePrice = async (req, res) => {
    try {
        const price = Number(req.params.price);
        if (Number.isNaN(price)) {
            res.status(400).json({
                message: 'Price must be a number',
            });
            return;
        }
        const orders = await OrderModel_1.OrderModel.find({
            totalPrice: {
                $gt: price,
            },
        });
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({
            message: 'Server error',
        });
    }
};
exports.getOrdersAbovePrice = getOrdersAbovePrice;
const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const allowedStatuses = [
            'pending',
            'confirmed',
            'cancelled',
            'completed',
        ];
        if (!allowedStatuses.includes(status)) {
            res.status(400).json({
                message: 'Invalid order status',
            });
            return;
        }
        const order = await OrderModel_1.OrderModel.findByIdAndUpdate(id, {
            status,
        }, {
            new: true,
            runValidators: true,
        });
        if (!order) {
            res.status(404).json({
                message: 'Order not found',
            });
            return;
        }
        res.status(200).json({
            message: 'Order status updated successfully',
            order,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server error',
        });
    }
};
exports.updateOrderStatus = updateOrderStatus;
