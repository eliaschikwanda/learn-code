const express = require('express');
const router = express.Router();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];


router.get('/', (req, res) => {
    res.send(courses);
});

// HTTP get request
router.get('/:id', (req, res) => {
    // To read the passed parameter we use req.params.{passed-param-name}
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if (!course) return  res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

// HTTP post request
router.post('/', (req, res) => {
    const {error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name, // Enable the passing of jason object to use this feature
    }
    courses.push(course);
    res.send(course);
});

// HTTP put request
router.put('/:id', (req, res) => {
    // Look up the course
    // if not existing return 404
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');

    // validate
    // If invalid, return 400 -Bad request
    const {error} = validateCourse(req.body);
    
    if (error) return res.status(400).send(error.details[0].message);
    // Update the course
    // Return the updated courses.
    course.name = req.body.name;
    res.send(course);
});

// HTTP delete request
router.delete('/:id', (req, res) => {
    // Look up the course
    // No existing return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

module.exports = router;