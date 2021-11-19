module.exports = (req, res) => {
  res.status(205).send('successfully signed out!');
  res.status(500).send();
};