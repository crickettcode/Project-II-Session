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
        level: "advanced",
        photoUrl: "http://somelink",
    })
    const crickett = new User({
        username: "Crickett",
        email: 'skater@skatez.com',
        firstName: 'Cri',
        lastName: 'Ckett',
        mode: "Skate Board Duh"
    })
    const comment1 = new Comment({
        title: 'Ballin',
        content: 'The park was rocking today.'
    })
    o4w.users.push(crickett)
    o4w.comments.push(comment1)

    return o4w.save()
}).then(() => {
    const langford = new Park({
        name: "a.langford",
        level: "beginner",
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
        name: "brookerun",
        level: "intermediate"
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