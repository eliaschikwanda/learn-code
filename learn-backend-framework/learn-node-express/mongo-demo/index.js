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
    // Comparison Operators
    // eq (equal)
    // nq (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less)
    // lte (less than or equal)
    // in
    // nin (not in)
    // Using the course class to query documents

    // /api/courses/?pageNumber=2&pageSize=10
    const pageNumber = 2;
    const pageSize = 10;

    const course = await Course
        // .find({price: { $gt: 10, $lt: 20 }}) --> Courses with prices between 10 and 20
        // .find({prices: { $in: [10, 15, 20]}}) --> Courses with prices that either 10, 15, or 20

        // With logical operators we use or, and
        // .find() --> When using and / or leave the find empty.
        // .or([{}, {}]) --> Array of filters
        // .and([{}, {}]) --> Array of filter objects

        // You can use regular expression to filter courses and have more control with strings
        // .find({author: /^Mosh/}) --> The regular expression that represents starts with mosh.
        // .find(author: /Williams$/) --> The $ makes the query that ends with a $.
        // .find({ author: /.*Mosh.*/i}) --> Contains the word Mosh. The i makes it case insensetive
        .find({author: 'Mosh', isPublished: true})
        // Inorder to implement pagination we need to skip all the documents in the previous page
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({name: 1}) // 1 is ascending and -1 is descending
        .select({name: 1, tags: 1})
    console.log(course);
}

getCourses(); 