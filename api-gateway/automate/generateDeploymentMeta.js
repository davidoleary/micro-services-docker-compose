const fs = require('fs');
var git = require('git-rev-sync');

console.log('--------------> before deploy.json gen');
fs.writeFileSync('./deploy.json', JSON.stringify({
  commitSha: git.long(),
  deploymentTime: new Date(),
}), 'utf-8');
console.log('--------------> after deploy.json gen');


