require('dotenv').config()
const Park = require('./models/Park')
const User = require('./models/User')
const Comment = require('./models/Comment')

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
    process.exit(-1)
})


Park.remove({}).then(() => {
    const o4w = new Park({
        name: "old fourth",
        street: "830 Willoughby Way",
        city: "Atlanta",
        zip: 30312,
        hours: "six AM until eleven PM",
        level: "advanced",
        photoUrl: "https://i.imgur.com/xp174H2.jpg",
    })
    const Captain_Rick = new User({
        username: "PickleRick",
        email: 'ihatethisfamily.com',
        firstName: 'Captain',
        lastName: 'Rick',
        mode: "Skate Board Duh"
    })
    const comment1 = new Comment({
        title: 'Come on Morty',
        content: 'Wubba lubba dub dub'
    })
    o4w.users.push(captain_rick)
    o4w.comments.push(comment1)

    return o4w.save()
}).then(() => {
    const langford = new Park({
        name: "A.langford",
        street: "1614 Arthur Langford Jr Pl, SW,",
        city: "Atlanta",
        zip: 30315,
        hours: "N/A",
        level: "beginner",
        photoUrl: "https://i.imgur.com/s9GgVdk.jpg",
    })
    const finn = new User({
        username: "Finnoggn",
        email: "finnsk8tr@skaterz.com",
        firstName: "Finn",
        lastName: "Noggn",
        mode: "Skate Board"
    })
    const comment2 = new Comment({
        title: "Crying",
        content: "this is too hard"
    })
    langford.users.push(finn)
    langford.comments.push(comment2)

    return langford.save()

}).then(() => {
    const brookerun = new Park({
        name: "Brookerun",
        street: "4770 N Peachtree Rd,",
        city: "Dunwoody",
        zip: 30338,
        hours: "seven AM to ten PM ",
        level: "intermediate",
        photoUrl: "https://i.imgur.com/Vm46iNC.jpg",
    })
    const della = new User({
        username: "Della",
        email: "dellacantskate@skaterz.com",
        firstName: "Del",
        lastName: "la",
        mode: "feets"
    })
    const comment3 = new Comment({
        title: "Yelling at Me",
        content: "the usual"
    })
    brookerun.users.push(della)
    brookerun.comments.push(comment3)

    return brookerun.save()
}).catch((error) => {
    console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
    console.log(error)
}).then(() => {
    mongoose.connection.close()
    console.log(`
        Finished seeding database...
        
        Disconnected from MongoDB
      `)
})