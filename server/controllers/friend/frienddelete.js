const { friend } = require('../../models');

module.exports = async (req, res) => {
  // 친구삭제 요청시 성공 200, 실패 500서버 에러 / 이외에 에러가 있나?
  const { nickName, image, email } = req.body;
  const deleteInfo = await friend.findOne({where: req.body});
  
  if(!deleteInfo) {
    res.status(404).send('not found');
  } else {
    friend.destroy({where: req.body});
    res.status(200).json({data: null, message: 'Success'});
  }
};