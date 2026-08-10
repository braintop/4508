"use strict";
// controllers/bookingController.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookingsAbove1000 = getBookingsAbove1000;
exports.getBookingsBelow500 = getBookingsBelow500;
exports.getBookingsBetweenPrices = getBookingsBetweenPrices;
exports.getLongBookings = getLongBookings;
exports.getShortBookings = getShortBookings;
exports.getNotCancelledBookings = getNotCancelledBookings;
exports.getActiveBookings = getActiveBookings;
exports.getBookingsFromLastWeek = getBookingsFromLastWeek;
exports.getBookingsFromCurrentYear = getBookingsFromCurrentYear;
exports.getBookingsByHotelId = getBookingsByHotelId;
exports.getBookingsByGuestId = getBookingsByGuestId;
exports.getBookingsInIsrael = getBookingsInIsrael;
exports.getBookingsPriceDescending = getBookingsPriceDescending;
exports.getBookingsPriceAscending = getBookingsPriceAscending;
exports.getFirstTenBookings = getFirstTenBookings;
exports.getBookingsPageThree = getBookingsPageThree;
exports.getSelectedBookingFields = getSelectedBookingFields;
exports.getBookingsWithoutCreatedAt = getBookingsWithoutCreatedAt;
exports.countApprovedBookings = countApprovedBookings;
const mongoose_1 = __importDefault(require("mongoose"));
const bookingModel_1 = require("../models/bookingModel");
const hotelModel_1 = require("../models/hotelModel");
// 1. הזמנות מעל 1000
async function getBookingsAbove1000(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find({
            price: { $gt: 1000 },
        })
            .populate('hotel')
            .populate('guest');
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 2. הזמנות מתחת ל-500
async function getBookingsBelow500(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find({
            price: { $lt: 500 },
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 3. הזמנות בין 800 ל-2000
async function getBookingsBetweenPrices(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find({
            price: {
                $gte: 800,
                $lte: 2000,
            },
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 4. הזמנות של לפחות 5 ימים
async function getLongBookings(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find({
            days: { $gte: 5 },
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 5. הזמנות של פחות מ-3 ימים
async function getShortBookings(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find({
            days: { $lt: 3 },
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 6. כל ההזמנות שאינן Cancelled
async function getNotCancelledBookings(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find({
            status: { $ne: 'Cancelled' },
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 7. Pending או Approved
async function getActiveBookings(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find({
            status: {
                $in: ['Pending', 'Approved'],
            },
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 8. הזמנות שנוצרו בשבוע האחרון
async function getBookingsFromLastWeek(req, res) {
    try {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const bookings = await bookingModel_1.BookingModel.find({
            createdAt: {
                $gte: oneWeekAgo,
            },
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 9. הזמנות שנוצרו השנה
async function getBookingsFromCurrentYear(req, res) {
    try {
        const currentYear = new Date().getFullYear();
        const startOfYear = new Date(currentYear, 0, 1);
        const startOfNextYear = new Date(currentYear + 1, 0, 1);
        const bookings = await bookingModel_1.BookingModel.find({
            createdAt: {
                $gte: startOfYear,
                $lt: startOfNextYear,
            },
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 10. הזמנות לפי ID של מלון
async function getBookingsByHotelId(req, res) {
    try {
        const { hotelId } = req.params;
        if (!mongoose_1.default.isValidObjectId(hotelId)) {
            res.status(400).json({ message: 'Invalid hotel ID' });
            return;
        }
        const bookings = await bookingModel_1.BookingModel.find({
            hotel: hotelId,
        })
            .populate('hotel')
            .populate('guest');
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 11. הזמנות לפי ID של אורח
async function getBookingsByGuestId(req, res) {
    try {
        const { guestId } = req.params;
        if (!mongoose_1.default.isValidObjectId(guestId)) {
            res.status(400).json({ message: 'Invalid guest ID' });
            return;
        }
        const bookings = await bookingModel_1.BookingModel.find({
            guest: guestId,
        })
            .populate('hotel')
            .populate('guest');
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 12. הזמנות של מלונות בישראל
async function getBookingsInIsrael(req, res) {
    try {
        const hotels = await hotelModel_1.HotelModel.find({
            country: 'Israel',
        }).select('_id');
        const hotelIds = hotels.map((hotel) => hotel._id);
        const bookings = await bookingModel_1.BookingModel.find({
            hotel: {
                $in: hotelIds,
            },
        })
            .populate('hotel')
            .populate('guest');
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 21. מהיקרה לזולה
async function getBookingsPriceDescending(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find().sort({
            price: -1,
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 22. מהזולה ליקרה
async function getBookingsPriceAscending(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find().sort({
            price: 1,
        });
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 23. עשר הזמנות ראשונות
async function getFirstTenBookings(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find().limit(10);
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 24. דילוג על 20 והבאת 10
async function getBookingsPageThree(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find()
            .skip(20)
            .limit(10);
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 25. הצגת price, days, status בלבד
async function getSelectedBookingFields(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find().select('price days status');
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 26. הכול חוץ מ-createdAt
async function getBookingsWithoutCreatedAt(req, res) {
    try {
        const bookings = await bookingModel_1.BookingModel.find().select('-createdAt -updatedAt');
        res.json(bookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
// 27. מספר הזמנות Approved
async function countApprovedBookings(req, res) {
    try {
        const count = await bookingModel_1.BookingModel.countDocuments({
            status: 'Approved',
        });
        res.json({
            approvedBookings: count,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
