const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
 .then(() => {console.log('Connected to MongoDB... ')})
 .catch((err) => {console.log(err.message)});

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: {Date},
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number,
})

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course
        .find({isPublished: true, tags: 'backend'})
        .select({name: 1, author: 1})
        .sort({name: 1});
}

async function run () {
    const courses = await getCourses();
    console.log(courses);
}

run();
