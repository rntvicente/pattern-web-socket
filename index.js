const chalk = require('chalk');
const socketio = require('socket.io');

const app = require('./app');
const config = require('./app/commons/config');

const server = app.listen(config.get('PORT'), (err) => {
  if (err) {
    console.error(chalk.red(`Error on listen port ${err.message}`));
  }

  console.log(chalk.green(`Server starting at port:${server.address().port}.`));
});

const io = socketio().listen(server);

io.on('connection', (socket) => {
  console.log(chalk.blue('user conect'));

  socket.on('disconnect', () => {
    console.log(chalk.blue('user disconect'))
  });
});

module.exports = server;
