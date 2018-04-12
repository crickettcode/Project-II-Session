const mongoose = require('mongoose')
const Schema = require('../Schema')

const Park = mongoose.model('Park', Schema.ParkSchema)

module.exports = Park 