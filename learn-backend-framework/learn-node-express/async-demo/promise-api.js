// Creating an already resolved promise
const p1 =Promise.resolve({id: 1});
p1.then((res) => {console.log(res)});

// Creating an already rejected promise =
const p2 = Promise.reject(new Error('Error message..'));
p2.catch((err) => {console.log(err.message, '\n')});

// Running promises in Parallel
const p3 = new Promise((resolve, result) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

const p4 = new Promise((resolve, result) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

// Kick off all synchronous processes
Promise.all([p3, p4])
 .then((result) => {console.log(result)});