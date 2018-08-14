const router = (application) => {
  application.get('/', (req, res) => {
    application.app.controllers.index.get(req, res);
  });

  application.get('/chat', (req, res) => {
    application.app.controllers.index.initialChat(application, req, res);
  });

  application.post('/chat', (req, res) => {
    application.app.controllers.index.initialChat(application, req, res);
  });
};

module.exports = router