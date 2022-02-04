const router = require('express').Router();
const tripRoutes = require('./trip');
const travelerRoutes = require('./traveler');
const locationRoutes = require('./location');

router.use('/trip', tripRoutes);
router.use('/traveler', travelerRoutes);
router.use('/location', locationRoutes);

module.exports = router;
