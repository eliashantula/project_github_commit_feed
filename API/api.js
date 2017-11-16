'use strict';
var Github = require('github');
var git = Github();

class Gitwrap {
  constructor(repo, owner) {
    git.authenticate({
      type: 'token',
      token: '6c5e98cc360a8d6b5646d94f5ad9f06f121ceaf4'
    });
  }

  getCommits(repo, owner) {
    return new Promise((resolve, reject) => {
      git.repos.getCommits(
        {
          owner: `${owner}`,
          repo: `${repo}`
        },
        function(err, data) {
          if (err) {
            return reject(err);
          }
          return resolve(data);
        }
      );
    });
  }
  //work with promises
}

module.exports = Gitwrap;
