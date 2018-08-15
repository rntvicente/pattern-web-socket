const chalk = require('chalk');
const socketio = require('socket.io');

const app = require('./app/server');
const config = require('./app/commons/config');

const emit = (socket, data, event) => {
  socket.emit(event, {
    apelido: data.apelido,
    message: data.message
  });
};

const broadcast = (socket, data, event) => {
  socket.broadcast.emit(event, {
    apelido: data.apelido,
    message: data.message
  });
};

const server = app.listen(config.get('PORT'), (err) => {
  if (err) {
    console.error(chalk.red(`Error on listen port ${err.message}`));
  }

  console.log(chalk.green(`Server starting at port:${server.address().port}.`));
});

const io = socketio().listen(server);

app.set('io', io);

io.on('connection', (socket) => {
  console.log(chalk.blue('user conect'));

  socket.on('disconnect', () => {
    console.log(chalk.yellow('user disconect'))
  });

  socket.on('message-to-server', (data) => {
    /*dialog*/
    emit(socket, data, 'message-to-custumer');
    broadcast(socket, data, 'message-to-custumer');

    /*participants*/
    if (parseInt(data.apelidoCheck) === 0) {
      emit(socket, data, 'participants-chat');
      broadcast(socket, data, 'participants-chat');
    }
  });
});
