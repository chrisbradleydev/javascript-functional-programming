// Create Reusable Functions with Partial Application in JavaScript

import fetch from 'node-fetch';

const getFromAPI = baseURL => endpoint => cb =>
    fetch(`${baseURL}${endpoint}`)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => {
            console.error(err.message);
        });

const getGithub = getFromAPI('https://api.github.com');
const getGithubUsers = getGithub('/users');
const getGithubRepos = getGithub('/repositories');

getGithubUsers(data => {
    console.log(data.map(user => user.login));
});

getGithubUsers(data => {
    console.log(data.map(user => user.avatar_url));
});

getGithubRepos(data => {
    console.log(data.map(repo => repo.name));
});

getGithubRepos(data => {
    console.log(data.map(repo => repo.private));
});
