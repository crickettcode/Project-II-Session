const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise



const UserSchema = new Schema(
    {
        username: {
            type: String
        },

        email: {
            type: String
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        photoUrl: {
            type: String,
            default: ''
        },
        mode: {
            type: String
        }
    },
    {
        timestamps: {}
    }
)

const CommentSchema = new Schema(
    {
        title: {
            type: String
        },
        content: {
            type: String
        }
    },
    {
        timestamps: {}

    }
)
const ParkSchema = new Schema(
    {
        name: {
            type: String
        },
        street: {
            type: String
        },
        city: {
            type: String
        },
        zip: {
            type: Number
        },
        hours: {
            type: String
        },
        photoUrl: {
            type: String,
            default: ''
        },
        level: {
            type: String
        },
        users: [UserSchema],
        comments: [CommentSchema]
    },
    {
        timestamps: {}
    }
)

module.exports = {
    ParkSchema,
    UserSchema,
    CommentSchema
}