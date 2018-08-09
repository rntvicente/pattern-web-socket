const chalk = require('chalk');

const app = require('./app');
const config = require('./app/commons/config');

const server = app.listen(config.get('PORT'), (err) => {
  if (err) {
    console.error(chalk.red(`Error on listen port ${err.message}`));
  }

  console.log(chalk.green(`Server starting at port:${server.address().port}.`));
});

module.exports = server;
