const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'First name cannot be left blank.']
    },
    last_name: {
        type: String
    },
    email:    {
        type: String,
        required: [true, 'Email address cannot be left blank.'],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        index: {unique: true, dropDups: true}
    },
    password: {
        type: String,
        required: [true, 'Password cannot be left blank']
    },
    phone: { type: String,
        required: [true, 'Phone number must be provided']
    },
    address: {
        type: String ,
        required: [true, 'Address must be provided']
    },
});
module.exports = mongoose.model('User', userSchema);
