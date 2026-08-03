"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotels = void 0;
exports.createHotel = createHotel;
exports.addRoomToHotel = addRoomToHotel;
const hotelModel_1 = require("../models/hotelModel");
async function createHotel(req, res) {
    try {
        const hotel = await hotelModel_1.HotelModel.create(req.body);
        res.status(201).json(hotel);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to create hotel',
            error
        });
    }
}
const getHotels = async (req, res) => {
    const hotels = await hotelModel_1.HotelModel.find();
    res.status(200).json(hotels);
};
exports.getHotels = getHotels;
async function addRoomToHotel(req, res) {
    try {
        const hotel = await hotelModel_1.HotelModel.findById(req.params.hotelId);
        if (!hotel) {
            res.status(404).json({
                message: 'Hotel not found'
            });
            return;
        }
        hotel.rooms.push(req.body);
        await hotel.save();
        res.status(200).json(hotel);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to add room',
            error
        });
    }
}
