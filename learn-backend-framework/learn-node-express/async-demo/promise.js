// When creating a Promise you should pass an objct with two parameters
// resolve and reject 
const p = new Promise((resolve, reject) => {
    // Kick off some async work
    // ... when the async work complete we should either have a value or an error.
    // If there is a value return it to the consumer of the promise
    // The resolve and reject parameters are functions
    // You either call the resolve and reject depending on the async work \
    setTimeout(() => {
        // resolve(1); // pending -> resolved, fulfilled.
        reject(new Error('message')); // pending -> rejected and use the reject function to return an error to the consumer of the promise
    }, 2000); 
});

p
    .then((result) => {
        console.log('Result: ',result);
    })
    .catch((err) => {
        console.log('Error: ', err.message);
    })