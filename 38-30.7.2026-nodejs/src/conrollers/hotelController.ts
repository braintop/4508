import { Request, Response } from 'express';
import { HotelModel } from '../models/hotelModel';

export async function createHotel(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const hotel = await HotelModel.create(req.body);
  
      res.status(201).json(hotel);
    } catch (error) {
      res.status(500).json({
        message: 'Failed to create hotel',
        error
      });
    }
  }
  export const getHotels = async (req: Request, res: Response) => {
    const hotels = await HotelModel.find();
    res.status(200).json(hotels);
}
export async function addRoomToHotel(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const hotel = await HotelModel.findById(req.params.hotelId);

    if (!hotel) {
      res.status(404).json({
        message: 'Hotel not found'
      });
      return;
    }

    hotel.rooms.push(req.body);

    await hotel.save();

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to add room',
      error
    });
  }
}

export async function updateRoom(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { hotelId, roomId } = req.params;

    const hotel = await HotelModel.findById(hotelId);

    if (!hotel) {
      res.status(404).json({
        message: 'Hotel not found'
      });
      return;
    }

    const room = hotel.rooms.id(roomId as string);

    if (!room) {
      res.status(404).json({
        message: 'Room not found'
      });
      return;
    }

    room.set(req.body);

    await hotel.save();

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update room',
      error
    });
  }
}

export async function deleteRoom(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { hotelId, roomId } = req.params;

    const hotel = await HotelModel.findById(hotelId);

    if (!hotel) {
      res.status(404).json({
        message: 'Hotel not found'
      });
      return;
    }

    const room = hotel.rooms.id(roomId as string);

    if (!room) {
      res.status(404).json({
        message: 'Room not found'
      });
      return;
    }

    room.deleteOne();

    await hotel.save();

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete room',
      error
    });
  }
}




