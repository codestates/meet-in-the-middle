module.exports = {
  signup: require('./user/signup'),
  signin: require('./user/signin'),
  signout: require('./user/signout'),
  findlogininfo: require('./user/findlogininfo'),
  auth: require('./user/auth'),
  friendlist: require('./friend/friendlist'),
  frienddelete: require('./friend/frienddelete'),
  userinfo: require('./user/userinfo'),
  signwithdrawal: require('./user/signwithdrawal')
};