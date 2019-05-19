const fs = require('fs');
var git = require('git-rev-sync');

fs.writeFileSync('./deploy.json', JSON.stringify({
  commitSha: git.long(),
  deploymentTime: new Date(),
}), 'utf-8');
