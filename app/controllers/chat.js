const initialChat = (application, req, res) => {
  const { body } = req;

  req.assert('apelido', 'Campo Obrigatório').notEmpty();
  req.assert('apelido', 'Campo deve ter no minímo 3 caracteres').len(3, 20);

  const hasErrors = req.validationErrors();

  if (hasErrors) {
    res.render('index', { validation: hasErrors });
    return;
  }

  application
    .get('io')
    .emit('message-to-custumer', {
      apelido: body.apelido,
      message: 'Acabou de entrar.'
    });

  res.render('chat');
};

module.exports = { initialChat };