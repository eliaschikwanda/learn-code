const startAppDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Joi = require('joi'); // A class is returned
const express = require('express');
const logger = require('./middleware/logger');
const config = require('config');
const courses = require('./routes/courses');
const home = require('./routes/home');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

// Templating engine --> We don't require it but load it using the set fntion.
app.set('view engine', 'pug');
app.set('views', './views'); // default

app.use(express.json()); // req.body --> Built-in middle function

// Creating a custom middleware function.
// The next variable is the reference of the next middleware function.
app.use(logger);
app.use(helmet());
app.use('/api/courses', courses); // For any path that starts with `/api/courses` use the courses router.
app.use('/', home); // For any path request that starts with `/` use home router

// Only enabling a middleware in dev mode
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startAppDebugger('Enabled Morgan ... ');
}

// Db work
dbDebugger('Connected to the database...');

// Middleware functions can be used to authenticate
// Middleware functions are called in sequence.
app.use((req, res, next) => {
    console.log('Authenticating... ');
   next(); // Pass control to the next middleware function.
})





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
// console.log('Application Name: ' + config.get('name'));
// console.log('Mail Server: ' + config.get('mail.host'));
// console.log('Pasword: ' + config.get('mail.password'));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});