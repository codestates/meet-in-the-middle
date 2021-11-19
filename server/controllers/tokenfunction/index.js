require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    // accessToken 발급
    return sign(data, process.env.ACCESS_SECRET, {expiresIn: '30m'});
  },

  // generateRefreshToken: (data) => {
  //   // refreshToken 발급
  //   return sign(data, process.env.REFRESH_SECRET, {expiresIn: '30d'});
  // },

  sendAccessToken: (res, accessToken) => {
    res.cookie('jwt', accessToken, {httpOnly: true});
  },

  // resendAccessToken: (res, accessToken) => {
  //   res.json({data: {accessToken, needInfo: data}, message: 'ok'});
  // },

  // sendRefreshToken: (res, refreshToken) => {
  //   res.cookie('refreshToken', refreshToken, {httpOnly: true});
  // },

  isAuthorized: (req) => {
    // JWT토큰 정보를 받아서 검증
    const authorization = req.cookies['jwt'];

    if(!authorization) {
      return null;
    }
    try {
      return verify(authorization, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
  
  //checkRefreshToken: (refreshToken) => {
  //  try {
  //    return verify(refreshToken, process.env.REFRESH_SECRET);
  //  } catch (err) {
  //    return null;
  //  }
  //}
};