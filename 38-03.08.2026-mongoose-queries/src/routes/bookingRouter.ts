import { Router } from 'express';
import { getBookingsAbove1000, getBookingsBelow500, getBookingsBetweenPrices, getLongBookings, getShortBookings, getNotCancelledBookings, getActiveBookings, getBookingsFromLastWeek, getBookingsFromCurrentYear, getBookingsByHotelId, getBookingsByGuestId, getBookingsInIsrael, getBookingsPriceDescending, getBookingsPriceAscending, getFirstTenBookings, getBookingsPageThree, getSelectedBookingFields, getBookingsWithoutCreatedAt, countApprovedBookings } from '../conrollers/bookingController';

const router = Router();

router.get('/bookings-above-1000', getBookingsAbove1000);
router.get('/bookings-below-500', getBookingsBelow500);
router.get('/bookings-between-prices', getBookingsBetweenPrices);
router.get('/bookings-long', getLongBookings);
router.get('/bookings-short', getShortBookings);
router.get('/bookings-not-cancelled', getNotCancelledBookings);
router.get('/bookings-active', getActiveBookings);
router.get('/bookings-from-last-week', getBookingsFromLastWeek);
router.get('/bookings-from-current-year', getBookingsFromCurrentYear);
router.get('/bookings-by-hotel-id', getBookingsByHotelId);
router.get('/bookings-by-guest-id', getBookingsByGuestId);
router.get('/bookings-in-israel', getBookingsInIsrael);
router.get('/bookings-price-descending', getBookingsPriceDescending);
router.get('/bookings-price-ascending', getBookingsPriceAscending);
router.get('/first-ten-bookings', getFirstTenBookings);
router.get('/bookings-page-three', getBookingsPageThree);
router.get('/selected-booking-fields', getSelectedBookingFields);
router.get('/bookings-without-created-at', getBookingsWithoutCreatedAt);
router.get('/count-approved-bookings', countApprovedBookings);

export default router;