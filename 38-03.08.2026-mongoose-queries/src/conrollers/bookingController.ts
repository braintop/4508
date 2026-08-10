// controllers/bookingController.ts

import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { BookingModel } from '../models/bookingModel';
import { HotelModel } from '../models/hotelModel';

// 1. הזמנות מעל 1000
export async function getBookingsAbove1000(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find({
      price: { $gt: 1000 },
    })
      .populate('hotel')
      .populate('guest');

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 2. הזמנות מתחת ל-500
export async function getBookingsBelow500(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find({
      price: { $lt: 500 },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 3. הזמנות בין 800 ל-2000
export async function getBookingsBetweenPrices(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find({
      price: {
        $gte: 800,
        $lte: 2000,
      },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 4. הזמנות של לפחות 5 ימים
export async function getLongBookings(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find({
      days: { $gte: 5 },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 5. הזמנות של פחות מ-3 ימים
export async function getShortBookings(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find({
      days: { $lt: 3 },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 6. כל ההזמנות שאינן Cancelled
export async function getNotCancelledBookings(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find({
      status: { $ne: 'Cancelled' },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 7. Pending או Approved
export async function getActiveBookings(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find({
      status: {
        $in: ['Pending', 'Approved'],
      },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 8. הזמנות שנוצרו בשבוע האחרון
export async function getBookingsFromLastWeek(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const bookings = await BookingModel.find({
      createdAt: {
        $gte: oneWeekAgo,
      },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 9. הזמנות שנוצרו השנה
export async function getBookingsFromCurrentYear(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const currentYear = new Date().getFullYear();

    const startOfYear = new Date(currentYear, 0, 1);
    const startOfNextYear = new Date(currentYear + 1, 0, 1);

    const bookings = await BookingModel.find({
      createdAt: {
        $gte: startOfYear,
        $lt: startOfNextYear,
      },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 10. הזמנות לפי ID של מלון
export async function getBookingsByHotelId(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { hotelId } = req.params;

    if (!mongoose.isValidObjectId(hotelId)) {
      res.status(400).json({ message: 'Invalid hotel ID' });
      return;
    }

    const bookings = await BookingModel.find({
      hotel: hotelId,
    })
      .populate('hotel')
      .populate('guest');

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 11. הזמנות לפי ID של אורח
export async function getBookingsByGuestId(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { guestId } = req.params;

    if (!mongoose.isValidObjectId(guestId)) {
      res.status(400).json({ message: 'Invalid guest ID' });
      return;
    }

    const bookings = await BookingModel.find({
      guest: guestId,
    })
      .populate('hotel')
      .populate('guest');

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 12. הזמנות של מלונות בישראל
export async function getBookingsInIsrael(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const hotels = await HotelModel.find({
      country: 'Israel',
    }).select('_id');

    const hotelIds = hotels.map((hotel) => hotel._id);

    const bookings = await BookingModel.find({
      hotel: {
        $in: hotelIds,
      },
    })
      .populate('hotel')
      .populate('guest');

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 21. מהיקרה לזולה
export async function getBookingsPriceDescending(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find().sort({
      price: -1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 22. מהזולה ליקרה
export async function getBookingsPriceAscending(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find().sort({
      price: 1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 23. עשר הזמנות ראשונות
export async function getFirstTenBookings(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find().limit(10);

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 24. דילוג על 20 והבאת 10
export async function getBookingsPageThree(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find()
      .skip(20)
      .limit(10);

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 25. הצגת price, days, status בלבד
export async function getSelectedBookingFields(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find().select(
      'price days status'
    );

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 26. הכול חוץ מ-createdAt
export async function getBookingsWithoutCreatedAt(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const bookings = await BookingModel.find().select(
      '-createdAt -updatedAt'
    );

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// 27. מספר הזמנות Approved
export async function countApprovedBookings(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const count = await BookingModel.countDocuments({
      status: 'Approved',
    });

    res.json({
      approvedBookings: count,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}