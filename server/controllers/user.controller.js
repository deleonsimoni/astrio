const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email(),
  mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
  password: Joi.string().required(),
  repeatPassword: Joi.string().required().valid(Joi.ref('password')),
});

module.exports = {
  insert,
  listUsers,
  markAdmin
};

async function insert(user) {
  user = await userSchema.validateAsync(user, { abortEarly: false });
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}

async function listUsers() {
  return await User.find()
    .select('_id -password')
    .sort({
      fullname: 1
    });
}

async function markAdmin(userId, isAdmin) {

  let roles = [];

  if (isAdmin == "admin") {
    roles.push("admin");
  }

  return await User.findByIdAndUpdate({
    _id: userId
  }, {
    roles
  });
}
