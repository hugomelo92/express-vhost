var express = require('express');
var vhost = require('vhost');
const fs = require('fs');

var appWithVhost = express();

try {
  const vhosts = JSON.parse(fs.readFileSync('vhosts.json', 'utf-8'));

  vhosts.map(function(line){
      const mongode = require(`./apps/${line.name}`);
      appWithVhost.use(vhost(`${line.host}`, mongode));
  })
  
} catch (err) {
  console.error(err)
}


/* istanbul ignore next */
if (!module.parent) {
  appWithVhost.listen(9000);
  console.log('Express started on port 9000');
}