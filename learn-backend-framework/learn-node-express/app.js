// const logger = require('./logger') // The require function returns the exports object which you can get through `console.log(module)
// logger.log('Hello World')
// console.log(logger)

const path = require('node:path');
var pathObj = path.parse(__filename);
// console.log(pathObj);

const os = require('node:os');
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);

const fs = require('node:fs');
const files = fs.readdirSync('./');
// console.log(files)

fs.readdir('./', (err, res) => {
    if (err) console.log(`Error: ${err}`);
    else console.log(res);
})

const Logger = require('./logger');
const logger = new Logger();

// A listener will be called when the event is emitted.
logger.on('messageLogged',     (args) => {
    console.log('Listener called', args);
}) // Takes two parameters the name of the event and the call back function.

logger.log('message');
