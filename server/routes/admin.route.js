const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const fileUpload = require('express-fileupload');

const router = express.Router();

const HomeRoutes = require('./home.route');
const ContatoRoutes = require('./contato.route');
const ConvenioRoutes = require('./convenio.route');
const PresidenteRoutes = require('./presidente.route');
const DiretorRoutes = require('./diretor.route');

// router.use(passport.authenticate('jwt', { session: false }));

// HomeRoutes
router.route('/home')
  .get(asyncHandler(HomeRoutes.list))
  .put(asyncHandler(HomeRoutes.update));


// ContatoRoutes
router.route('/contato')
  .get(asyncHandler(ContatoRoutes.list))
  .put(asyncHandler(ContatoRoutes.update));


// ConvenioRoutes
router.route('/convenio')
  .get(asyncHandler(ConvenioRoutes.list))
router
  .post("/convenio", [fileUpload()],asyncHandler(ConvenioRoutes.create))

router.route('/convenio/:id')
  .delete(asyncHandler(ConvenioRoutes.delete));


// PresidenteRoutes
router.route('/presidente')
  .get(asyncHandler(PresidenteRoutes.list))
  .post(asyncHandler(PresidenteRoutes.create))

router.route('/presidente/:id')
  .delete(asyncHandler(PresidenteRoutes.delete));

// Diretor
router.route('/diretor')
  .get(asyncHandler(DiretorRoutes.list))
  .post(asyncHandler(DiretorRoutes.create))

router.route('/diretor/:id')
  .delete(asyncHandler(DiretorRoutes.delete));

module.exports = router;
