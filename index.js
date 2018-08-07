const app = require('./config');

const server = app.listen(80, (err) => {
  if (err) {
    console.error(`Error on listen port ${err.message}`);
  }

  console.log(`Server starting at ${server.address().address}:${server.address().port}.`);
});

module.exports = server;
