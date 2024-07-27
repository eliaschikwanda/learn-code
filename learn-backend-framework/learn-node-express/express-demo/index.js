const Joi = require('joi'); // A class is returned
const express = require('express');
const logger = require('./logger');
const config = require('config');
const morgan = require('morgan')
const helmet = require('helmet');
const app = express();

app.use(express.json()); // req.body --> Built-in middle function

// Creating a custom middleware function.
// The next variable is the reference of the next middleware function.
app.use(logger);
app.use(helmet());

// Only enabling a middleware in dev mode
if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    console.log('Enabled Morgan ... ')
}


// Middleware functions can be used to authenticate
// Middleware functions are called in sequence.
app.use((req, res, next) => {
    console.log('Authenticating... ');
   next(); // Pass control to the next middleware function.
})

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

// HTTP get request
app.get('/api/courses/:id', (req, res) => {
    // To read the passed parameter we use req.params.{passed-param-name}
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if (!course) return  res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

// HTTP post request
app.post('/api/courses', (req, res) => {
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
app.put('/api/courses/:id', (req, res) => {
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
app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // No existing return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });
    return schema.validate(course);
}

// You can set the port using `export PORT={PORTNUM}`
const port = process.env.PORT || 3000;

// Configuration environments
//console.log(`NODE_ENV: ${process.env.NODE_ENV}`) // If not set it will be undefined.

// Configuration.
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Pasword: ' + config.get('mail.password'));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});