console.log('Before');
// getUser(1, (user) => { 
//     console.log('User', user);
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('Repos',repos);
//     })
// });

// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommit(repos[0]))
//   .then(commits => console.log('Commits: ', commits))
//   .catch(err => console.log(err.message));

// Async and Await approach 
// Anytime you call a function that returns a promise you can wait that function.
// and get a result like if you're calling a synchronous function.
// Whenever you use await you need to decorate the function with the async modifier
// With this approach we use a tri cathc block to cathc the error 
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commit = await getCommit(repos[0]);
        console.log('Commits: ', commit);
    } catch (err) {
        console.log('Error: ', err.message);
    }
    
}

displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database... ');
            resolve({id: id, gitHubUsername: 'elias'});
        }, 2000);
    });
};

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting data from github API... ')
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommit(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            // reject(new Error('Cannot get the commit...'));
            resolve(['commit'])
        }, 2000);
    });
}
