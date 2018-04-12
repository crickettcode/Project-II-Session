const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const ParkSchema = new Schema(
    {
        name: {
            type: String
        },
    street: {
        type: Number
    },
    city:{
        type: String 
    },
    zip: {
        type: Number
    },
    hours: { 
        type: Number
    },
photoUrl: {
    type: String,
    default:'https://i.imgur.com/ayxMbRa.png'
},
level: {
    type:String 
},
{
    timestamps:{}
    }
)

const UserSchema = new Schema(
    {
        username: {
            type: String
        },

        email: {
            type: String
        },
        firstName: {
            type:String
        },
        lastName: {
            type: String
        },
        photoUrl: {
            type: String,
            default:'https://i.imgur.com/ayxMbRa.png'
        },
        mode: {
            type: String

        },
         usersInPark: [ParkSchema]
    },
    {
        timestamps:{}
    }
)

const CommentsSchema = new Schema (
    {
        title: {
            type: String
        },
        content: {
            type: String
        },
commentsInPark: [ParkSchema]
    },
    {
        timestamps:{},

    }
)

module.exports = {
    ParkSchema,
    UserSchema,
    ContentSchema
}