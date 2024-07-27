const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'My Express App', message: 'Hello'});
    // The render function takes the name of the pug file which is index and the parameters that you need available in that file
    // res.send('Hello World');    
}); // Use to handle http get request.

module.exports = router;