import { Request, Response } from 'express';
import { OrderModel } from '../models/OrderModel';



export const createOrder = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const {
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
      } = req.body;
  
      const order = await OrderModel.create({
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
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  };
  export const getOrders = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const orders = await OrderModel.find();
      console.log(req.body);
      
      res.status(200).json({
        message: 'Orders fetched successfully',
        orders,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  };
  
  export const getOrderById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
  
      const order = await OrderModel.findById(id);
  
      if (!order) {
        res.status(404).json({
          message: 'Order not found',
        });
        return;
      }
  
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  };
  export const updateOrder = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
  
      const order = await OrderModel.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
  
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
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  };
  
  export const deleteOrder = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
  
      const order = await OrderModel.findByIdAndDelete(id);
  
      if (!order) {
        res.status(404).json({
          message: 'Order not found',
        });
        return;
      }
  
      res.status(200).json({
        message: 'Order deleted successfully',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  };
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
  

  export const getOrdersAbovePrice = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const price = Number(req.params.price);
  
      if (Number.isNaN(price)) {
        res.status(400).json({
          message: 'Price must be a number',
        });
        return;
      }
  
      const orders = await OrderModel.find({
        totalPrice: {
          $gt: price,
        },
      });
  
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  };
  export const updateOrderStatus = async (
    req: Request,
    res: Response
  ): Promise<void> => {
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
  
      const order = await OrderModel.findByIdAndUpdate(
        id,
        {
          status,
        },
        {
          new: true,
          runValidators: true,
        }
      );
  
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
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  };