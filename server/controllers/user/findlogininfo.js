const { users } = require('../../models');

module.exports = async (req, res) => {
  // 아이디 비밀번호 찾기에서 생년월일이 필요할것 같음 => users에 birth data 추가
  const { username, phone, birth } = req.body;
  const loginInfo = await users.findOne({where: req.body});

  if(!loginInfo) {
    res.status(404).send('Failed finding userinfo');
  } else {
    res.status(201).json({data: {email: users.email, password: users.password}, message: 'Found'});
  }
};