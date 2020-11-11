const routes = require('express').Router();
const { route } = require('./app');
const ConvertController = require('./controllers/ConvertController');

routes.post('/convertToRomanNumerals', ConvertController.convertToRomanNumerals.bind(ConvertController));
routes.post('/convertToArabicNumbers', ConvertController.convertToArabicNumbers.bind(ConvertController));
module.exports = routes;
