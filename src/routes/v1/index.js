const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/cities', CityController.getAll);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);
module.exports = router;