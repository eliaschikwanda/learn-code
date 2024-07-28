// Creating an already resolved promise
const p =Promise.resolve({id: 1});
p.then((res) => {console.log(res)});

// Creating an already rejected promise =
const p1 = Promise.reject(new Error('Error message..'));
p1.catch((err) => {console.log(err.message)});