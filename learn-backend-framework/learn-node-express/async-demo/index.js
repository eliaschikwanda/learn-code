console.log('Before');
// getUser(1, (user) => { 
//     console.log('User', user);
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('Repos',repos);
//     })
// });

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommit(repos[0]))
  .then(commits => console.log('Commits: ', commits))
  .catch(err => console.log(err.message));

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
            resolve(['commit'])
        }, 2000);
    });
}
