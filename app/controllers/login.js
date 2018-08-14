const get = (req, res) => {
  res.render('index', { validation: {} });
};

module.exports = { get };
