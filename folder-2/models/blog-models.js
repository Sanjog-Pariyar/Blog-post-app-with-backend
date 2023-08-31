const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must Provide Title'],
        trim: true,
        maxlength: [1024, 'Max length Exceeded']
    },
    dateTime: {
        type: String,
        required: [true, 'Must Provide Title'],
        maxlength: [50, 'Max length Exceeded']
    },
    mainContent: {
        type: String,
        required: [true, 'Must Provide content'],
        trim: true,
        maxlength: [5000, 'Max length Exceeded']
    }
})

module.exports = mongoose.model('BLOGS', BlogSchema)