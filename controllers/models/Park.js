const mongoose = require('mongoose')
const Schema = require('../db/schema')

const Park = mongoose.model('Park', Schema.ParkSchema)

module.exports = Park 