const Joi = require('joi'); // A class is returned
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]

app.get('/', (req, res) => {
    res.send('Hello World');    
}); // Use to handle http get request.

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    // To read the passed parameter we use req.params.{passed-param-name}
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required(),
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(res.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name, // Enable the passing of jason object to use this feature
    }
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});