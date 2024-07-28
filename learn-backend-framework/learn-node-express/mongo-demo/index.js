const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
 .then(() => {console.log('Connected to MongoDB... ')})
 .catch((err) => {console.log(err.message)});

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['Angular', 'Frontend'],
    isPublished: true,
    });
    const result = await course.save(); // Mongo returns the ID of the new entry.
    console.log(result); 
}

async function getCourses() {
    // Using the course class to query documents
    const course = await Course
        .find({author: 'Mosh', isPublished: true})
        .limit(10)
        .sort({name: 1}) // 1 is ascending and -1 is descending
        .select({name: 1, tags: 1})
    console.log(course);
}

getCourses(); 