const { user } = require('../../models');
const { isAuthorized } = require('../tokenfunction');

module.exports = async (req, res) => {
  // 로그인 여부 판정
  const accessTokenData = isAuthorized(req);

  if(!accessTokenData) {
    res.status(401).json({data: null, message: 'not authorized'});
  } else {
    const needInfo = await user.findOne({where: {email: accessTokenData.email, userName: accessTokenData.userName, nickName: accessTokenData.nickName,
      birth: accessTokenData.birth, phone: accessTokenData.phone}});

      delete needInfo.dataValues.password;
      res.status(200).json({data: {needInfo: needInfo.dataValues}});
  }
};