"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hotelController_1 = require("../conrollers/hotelController");
const router = (0, express_1.Router)();
router.post('/', hotelController_1.createHotel);
router.get('/', hotelController_1.getHotels);
router.post('/:hotelId/rooms', hotelController_1.addRoomToHotel);
exports.default = router;
