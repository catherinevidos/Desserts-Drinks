const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
    let errors = {};
    data.body = validText(data.body) ? data.body : '';
    data.rating = validText(data.rating) ? data.rating : '';

    if (Validator.isEmpty(data.body)) {
        errors.body = 'Body can\'t be blank';
    }

    // if (Validator.isEmpty(data.rating)) {
    //     errors.rating = 'Rating can\'t be blank';
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};