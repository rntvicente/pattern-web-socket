const login = (req, res) => {
  res.render('index', { validation: {} });
};

module.exports = { login };