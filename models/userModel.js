const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9]+$/, 'Name should contain alphabet']
    },
    email: {
        type: String,
        required: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'The given email is not valid'
        ]
    },
    password:{
        type: String,
        required: true,
        validate: {
            validator: validatePassword, 
            message:'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character'
        }
    }, 
    dateOfBirth: {
        type: Date,
        required: true,
        validate : {
            validator: validateDOB,
            message: 'Person must be above 18'
        }
    },
});

function validatePassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*<>,.:;"']/.test(password);
}




function validateDOB(dob) {
    return (new Date().getFullYear - dob.getFullYear >=18)
}




module.exports = mongoose.model('User', userSchema);