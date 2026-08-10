"use strict";
// seed.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = seedDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const hotelModel_1 = require("../models/hotelModel");
const guestModel_1 = require("../models/guestModel");
const bookingModel_1 = require("../models/bookingModel");
dotenv_1.default.config();
async function seedDatabase() {
    try {
        // יצירת מלונות בבת אחת
        const hotels = await hotelModel_1.HotelModel.insertMany([
            {
                name: 'Hilton Tel Aviv',
                city: 'Tel Aviv',
                country: 'Israel',
                stars: 5,
                isActive: true,
            },
            {
                name: 'Dan Eilat',
                city: 'Eilat',
                country: 'Israel',
                stars: 5,
                isActive: true,
            },
            {
                name: 'Royal Jerusalem',
                city: 'Jerusalem',
                country: 'Israel',
                stars: 4,
                isActive: true,
            },
            {
                name: 'Blue Sea Hotel',
                city: 'Athens',
                country: 'Greece',
                stars: 3,
                isActive: false,
            },
            {
                name: 'Hilton London',
                city: 'London',
                country: 'England',
                stars: 5,
                isActive: true,
            },
        ]);
        // יצירת אורחים בבת אחת
        const guests = await guestModel_1.GuestModel.insertMany([
            {
                firstName: 'David',
                lastName: 'Cohen',
                age: 25,
                country: 'Israel',
                vip: true,
            },
            {
                firstName: 'Sarah',
                lastName: 'Levi',
                age: 42,
                country: 'Israel',
                vip: false,
            },
            {
                firstName: 'Daniel',
                lastName: 'Green',
                age: 31,
                country: 'USA',
                vip: true,
            },
            {
                firstName: 'Emma',
                lastName: 'Brown',
                age: 22,
                country: 'England',
                vip: false,
            },
            {
                firstName: 'Michael',
                lastName: 'Davidson',
                age: 54,
                country: 'Canada',
                vip: true,
            },
            {
                firstName: 'Noa',
                lastName: 'Israeli',
                age: 19,
                country: 'Israel',
                vip: false,
            },
            {
                firstName: 'John',
                lastName: 'Smith',
                age: 47,
                country: 'USA',
                vip: false,
            },
            {
                firstName: 'Anna',
                lastName: 'Wilson',
                age: 28,
                country: 'Germany',
                vip: true,
            },
            {
                firstName: 'Ron',
                lastName: 'David',
                age: 36,
                country: 'Israel',
                vip: false,
            },
            {
                firstName: 'Lucy',
                lastName: 'Stone',
                age: 63,
                country: 'England',
                vip: true,
            },
            {
                firstName: 'Tom',
                lastName: 'White',
                age: 17,
                country: 'USA',
                vip: false,
            },
            {
                firstName: 'Dana',
                lastName: 'Gold',
                age: 29,
                country: 'Israel',
                vip: false,
            },
            {
                firstName: 'Alex',
                lastName: 'King',
                age: 33,
                country: 'France',
                vip: true,
            },
            {
                firstName: 'Maria',
                lastName: 'Garcia',
                age: 45,
                country: 'Spain',
                vip: false,
            },
            {
                firstName: 'Peter',
                lastName: 'Johnson',
                age: 38,
                country: 'Canada',
                vip: false,
            },
        ]);
        // יצירת הזמנות בבת אחת
        await bookingModel_1.BookingModel.insertMany([
            {
                hotel: hotels[0]._id,
                guest: guests[0]._id,
                price: 1500,
                days: 3,
                status: 'Approved',
                checkIn: new Date('2026-08-10'),
                checkOut: new Date('2026-08-13'),
            },
            {
                hotel: hotels[1]._id,
                guest: guests[1]._id,
                price: 2400,
                days: 5,
                status: 'Pending',
                checkIn: new Date('2026-08-15'),
                checkOut: new Date('2026-08-20'),
            },
            {
                hotel: hotels[2]._id,
                guest: guests[2]._id,
                price: 700,
                days: 2,
                status: 'Cancelled',
                checkIn: new Date('2026-07-20'),
                checkOut: new Date('2026-07-22'),
            },
            {
                hotel: hotels[3]._id,
                guest: guests[3]._id,
                price: 450,
                days: 2,
                status: 'Finished',
                checkIn: new Date('2026-06-01'),
                checkOut: new Date('2026-06-03'),
            },
            {
                hotel: hotels[4]._id,
                guest: guests[4]._id,
                price: 3200,
                days: 7,
                status: 'Approved',
                checkIn: new Date('2026-09-01'),
                checkOut: new Date('2026-09-08'),
            },
            {
                hotel: hotels[0]._id,
                guest: guests[5]._id,
                price: 900,
                days: 4,
                status: 'Pending',
                checkIn: new Date('2026-08-07'),
                checkOut: new Date('2026-08-11'),
            },
            {
                hotel: hotels[1]._id,
                guest: guests[6]._id,
                price: 1800,
                days: 6,
                status: 'Approved',
                checkIn: new Date('2026-10-10'),
                checkOut: new Date('2026-10-16'),
            },
            {
                hotel: hotels[2]._id,
                guest: guests[7]._id,
                price: 1200,
                days: 3,
                status: 'Finished',
                checkIn: new Date('2026-05-10'),
                checkOut: new Date('2026-05-13'),
            },
            {
                hotel: hotels[3]._id,
                guest: guests[8]._id,
                price: 350,
                days: 1,
                status: 'Cancelled',
                checkIn: new Date('2026-04-02'),
                checkOut: new Date('2026-04-03'),
            },
            {
                hotel: hotels[4]._id,
                guest: guests[9]._id,
                price: 2800,
                days: 5,
                status: 'Pending',
                checkIn: new Date('2026-11-01'),
                checkOut: new Date('2026-11-06'),
            },
        ]);
        console.log('Database seeded successfully');
    }
    catch (error) {
        console.error('Seed error:', error);
    }
    finally {
        await mongoose_1.default.disconnect();
    }
}
