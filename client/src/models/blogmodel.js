const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    created: {
        type: Number,
        required: true,
        default: Date.now
    }
})

const BlogPost = mongoose.model('blogs', BlogSchema);
module.exports = BlogPost



