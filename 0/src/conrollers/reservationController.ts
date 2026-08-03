import { Request, Response } from 'express';
import { ReservationModel } from '../models/reservationModel';
import { CustomerModel } from '../models/customerModel';
import { HotelModel } from '../models/hotelModel';

export async function createReservation(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {
      customer,
      hotel,
      roomNumber,
      checkIn,
      checkOut,
      numberOfGuests
    } = req.body;

    const existingCustomer = await CustomerModel.findById(customer);

    if (!existingCustomer) {
      res.status(404).json({
        message: 'Customer not found'
      });
      return;
    }

    const existingHotel = await HotelModel.findById(hotel);

    if (!existingHotel) {
      res.status(404).json({
        message: 'Hotel not found'
      });
      return;
    }

    const room = existingHotel.rooms.find(
      currentRoom => currentRoom.roomNumber === roomNumber
    );

    if (!room) {
      res.status(404).json({
        message: 'Room not found in this hotel'
      });
      return;
    }

    const reservation = await ReservationModel.create({
      customer,
      hotel,
      roomNumber,
      checkIn,
      checkOut,
      numberOfGuests
    });

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create reservation',
      error
    });
  }
}

export async function getReservations(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const reservations = await ReservationModel.find().populate('customer')
    .populate('hotel');

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get reservations',
      error
    });
  }
}

export async function getReservationById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const reservation = await ReservationModel.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get reservation by id',
      error
    });
  }
}

export async function getReservationsByHotelId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { hotelId } = req.params;
  
      const existingHotel = await HotelModel.findById(hotelId);

      if (!existingHotel) {
        res.status(404).json({
          message: 'Hotel not found'
        });
        return;
      }
    
      const reservations = await ReservationModel.find({hotel: hotelId})
        .populate('customer', 'name email phone')
        .populate('hotel', 'name city stars');
  
      res.status(200).json(reservations);
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        message: 'Failed to get hotel reservations',
      });
    }
  }