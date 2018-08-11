const app = require('../server');

const message = apelido => {
  apelido;
  message = 'Acabou de entrar.';
};

const initialChat = (req, res) => {
  const { body } = req;

  req.assert('apelido', 'Campo Obrigatório').notEmpty();
  req.assert('apelido', 'Campo deve ter no minímo 3 caracteres').len(3, 20);

  const hasErrors = req.validationErrors();

  if (hasErrors) {
    res.render('index', { validation: hasErrors });
    return;
  }

  console.log(JSON.stringify(app, null, 2));
  // app
  //   .get('io')
  //   .emit('messageToCustumer', message(body.apelido));

  res.render('chat');
};

module.exports = { initialChat };