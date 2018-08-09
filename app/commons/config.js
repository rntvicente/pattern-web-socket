const nconf = require('nconf');

nconf.argv()
  .env()
  .file('conf/example-web-socket.json')
  .defaults({
  });

module.exports = nconf;