const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require('passport');
const userCtrl = require('../controllers/user.controller');
const authCtrl = require('../controllers/auth.controller');
const config = require('../config/config');

const router = express.Router();
module.exports = router;

router.post('/register', asyncHandler(register));
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  login
);
router.get('/me', passport.authenticate('jwt', { session: false }), login);

async function register(req, res, next) {
  try {
    await userCtrl.insert(req.body);
    res.json("Seu foi cadastro concluído com sucesso, aguarde a aprovação do administrador!");
  } catch (error) {
    console.log(error);

    let message = "Servidor momentaneamente inoperante. Tente novamente mais tarde.";
    let status = 500;

    if (error.hasOwnProperty("keyPattern") && error.keyPattern.email) {
      message = "Conta já cadastrada!"
      status = 400;
    }

    res
      .status(status)
      .json({ message });
  }

  // user = user.toObject();
  // delete user.hashedPassword;
  // req.user = user;
  // next();
}

function login(req, res) {
  let user = req.user;

  if (user.roles.length > 0) {
    let token = authCtrl.generateToken(user);
    res.json({ user, token });
  } else {
    res.status(401).json({ message: "User is not admin!" });
  }

}
