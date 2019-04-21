const Validator = require('validator')

module.exports = function (data) {
    let errors = {}

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }

    if (Validator.isEmpty(data.login)) {
        errors.login = 'Login field is required'
    }

    if (!Validator.isLength(data.login, {min: 4, max: 32})) {
        errors.login = 'Login must bettween 4 and 32 characters'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    if (!Validator.isLength(data.password, {min: 6, max: 32})) {
        errors.password = 'Password must bettween 6 and 32 characters'
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Retyped password field is required'
    } else if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Your retyped password must match'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}