
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminSchema = new Schema({


    email: {

        type: String,

    },

    password: {

        type: String,

    },
    role: String

});

module.exports = new mongoose.model('admin', adminSchema)