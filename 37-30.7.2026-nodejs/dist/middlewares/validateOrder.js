"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrder = void 0;
const validateOrder = (req, res, next) => {
    const { guestName, numberOfGuests, totalPrice, checkInDate, checkOutDate, } = req.body;
    if (!guestName || guestName.trim().length === 0) {
        res.status(400).json({
            message: 'Guest name is required',
        });
        return;
    }
    if (numberOfGuests === undefined ||
        numberOfGuests < 1 ||
        numberOfGuests > 6) {
        res.status(400).json({
            message: 'Number of guests must be between 1 and 6',
        });
        return;
    }
    if (totalPrice === undefined || totalPrice < 0) {
        res.status(400).json({
            message: 'Total price cannot be negative',
        });
        return;
    }
    if (!checkInDate || !checkOutDate) {
        res.status(400).json({
            message: 'Check-in and check-out dates are required',
        });
        return;
    }
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    if (checkOut <= checkIn) {
        res.status(400).json({
            message: 'Check-out date must be after check-in date',
        });
        return;
    }
    next();
};
exports.validateOrder = validateOrder;
