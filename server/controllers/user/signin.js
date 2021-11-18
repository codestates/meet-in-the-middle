const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenfunction');

module.exports = async(req, res) => {
  const { email, password } = req.body;
  await user.findOne({ where: { email, password}})
  .then((data) => {
    console.log(data);
    if(!data){
      return res.status(404).send('invalid user or Wrong password')
    }
    //const loginData = {id: data.id}
    const accessToken = generateAccessToken(data.dataValues);
    sendAccessToken(res, accessToken)
    res.status(200).json({ data: { accessToken },message: 'ok' });
  })
};