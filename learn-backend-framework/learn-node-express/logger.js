var url = 'http://mylogger.io/log'

const EventEmitter = require('node:events'); // The EventEmitter is a class 
// To use the emitter class we need to create a new instance of the class and use
// const emitter = new EventEmitter();

class Logger extends EventEmitter {
    log(message) {
        // Sent an HTTP request
        console.log(message);
        this.emit('messageLogged', {id: 1, url: "http://"});
        // Raised an event. --> Signal there is something going on.
    }
}

module.exports = Logger