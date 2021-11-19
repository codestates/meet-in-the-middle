const { user } = require('../../models');

module.exports = async (req, res) => {
  //console.log(req.body.id, 'dd');
  const {nickName, password, phone} = req.body;
  const changeUser = await user.findOne({where: req.body.id});
  //console.log(changeUser);

  if(!changeUser) {
    res.status(404).send('not found');
  } else if(user.nickName === nickName && user.password === password && user.phone === phone) {
    res.status(400).send('Same data')
  } else {
    user.update({nickName: nickName, password: password, phone: phone});
    res.status(200).send('changed userinfo');
  }
};