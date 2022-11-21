const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const ContatoRoutes = require('./contato.route');
const HomeRoutes = require('./home.route');
const ConvenioRoutes = require('./convenio.route');

// router.use(passport.authenticate('jwt', { session: false }));

router.route('/home')
  .get(asyncHandler(HomeRoutes.list))
  .put(asyncHandler(HomeRoutes.update));

router.route('/contato')
  .get(asyncHandler(ContatoRoutes.list))
  .put(asyncHandler(ContatoRoutes.update));

router.route('/convenio')
  .get(asyncHandler(ConvenioRoutes.list))
  .post(asyncHandler(ConvenioRoutes.create))

router.route('/convenio/:id')
  .delete(asyncHandler(ConvenioRoutes.delete));

module.exports = router;
