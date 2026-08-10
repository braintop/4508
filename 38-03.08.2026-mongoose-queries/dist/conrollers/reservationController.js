"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservation = createReservation;
exports.getReservations = getReservations;
exports.getReservationById = getReservationById;
exports.getReservationsByHotelId = getReservationsByHotelId;
exports.getReservationAboveGuestsNumber = getReservationAboveGuestsNumber;
const reservationModel_1 = require("../models/reservationModel");
const customerModel_1 = require("../models/customerModel");
const hotelModel_1 = require("../models/hotelModel");
async function createReservation(req, res) {
    try {
        const { customer, hotel, roomNumber, checkIn, checkOut, numberOfGuests } = req.body;
        const existingCustomer = await customerModel_1.CustomerModel.findById(customer);
        if (!existingCustomer) {
            res.status(404).json({
                message: 'Customer not found'
            });
            return;
        }
        const existingHotel = await hotelModel_1.HotelModel.findById(hotel);
        if (!existingHotel) {
            res.status(404).json({
                message: 'Hotel not found'
            });
            return;
        }
        const room = existingHotel.rooms.find(currentRoom => currentRoom.roomNumber === roomNumber);
        if (!room) {
            res.status(404).json({
                message: 'Room not found in this hotel'
            });
            return;
        }
        const reservation = await reservationModel_1.ReservationModel.create({
            customer,
            hotel,
            roomNumber,
            checkIn,
            checkOut,
            numberOfGuests
        });
        res.status(201).json(reservation);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to create reservation',
            error
        });
    }
}
async function getReservations(req, res) {
    try {
        const reservations = await reservationModel_1.ReservationModel.find().populate('customer')
            .populate('hotel');
        res.status(200).json(reservations);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to get reservations',
            error
        });
    }
}
async function getReservationById(req, res) {
    try {
        const reservation = await reservationModel_1.ReservationModel.findById(req.params.id);
        res.status(200).json(reservation);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to get reservation by id',
            error
        });
    }
}
async function getReservationsByHotelId(req, res) {
    try {
        const { hotelId } = req.params;
        const existingHotel = await hotelModel_1.HotelModel.findById(hotelId);
        if (!existingHotel) {
            res.status(404).json({
                message: 'Hotel not found'
            });
            return;
        }
        const reservations = await reservationModel_1.ReservationModel.find({ hotel: hotelId })
            .populate('customer', 'name email phone')
            .populate('hotel', 'name city stars');
        res.status(200).json(reservations);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to get hotel reservations',
        });
    }
}
//> gt , < lt , >= gte , <= lte
async function getReservationAboveGuestsNumber(req, res) {
    try {
        const { numberOfGuests } = req.body;
        console.log(numberOfGuests);
        const reservations = await reservationModel_1.ReservationModel.find({ numberOfGuests: { $gt: numberOfGuests } });
        res.status(200).json(reservations);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to get above 1000 reservations',
        });
    }
}
