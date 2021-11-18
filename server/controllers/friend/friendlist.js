const { friend } = require('../../models');
// users 테이블 require도 필요할까..?

module.exports = async (req, res) => {
  // 토큰 유효에 따른 조건문 작성(401, 201) cli-get req
  const friendList = await friend.findAll();

  res.status(201).json({data: friendList, message: 'users friend list'})
};