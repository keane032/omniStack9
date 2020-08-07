const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const controllerSession = require('../src/controllers/SessionController');
const controllerSpot = require('../src/controllers/SpotController');
const dashController = require('../src/controllers/DashController');
const bookingsController = require('../src/controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/spots' ,controllerSpot.index);
routes.get('/dash', dashController.index);
routes.post('/users', controllerSession.store);
routes.post('/spots', upload.single('filename') ,controllerSpot.store);
routes.post('/spots/:spot_id/bookings', bookingsController.index);

module.exports = routes;