const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateStopInput(data) {
    let errors = {};
    data.name = validText(data.name) ? data.name : '';
    data.lat = validText(data.lat) ? data.lat : '';
    data.lng = validText(data.lng) ? data.lng : '';
    data.color = validText(data.color) ? data.color : '';
    
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name of the stop is required';
    }

    if (Validator.isEmpty(data.lat)) {
        errors.lat = "Latitude of the stop is required";
    }

    if (Validator.isEmpty(data.lng)) {
        errors.lng = "Longitude of the stop is required";
    }

    if (Validator.isEmpty(data.color)) {
        errors.color = "Color of the subway track is required";
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};