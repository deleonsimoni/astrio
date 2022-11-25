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
const QuemSomosRoutes = require('./quem-somos.route');
const NoticiaRoutes = require('./noticia.route');
const EstatutoRoutes = require('./estatuto.route');

// router.use(passport.authenticate('jwt', { session: false }));

// Home
router.route('/home')
  .get(asyncHandler(HomeRoutes.list))
  .put(asyncHandler(HomeRoutes.update));


// Contato
router.route('/contato')
  .get(asyncHandler(ContatoRoutes.list))
  .put(asyncHandler(ContatoRoutes.update));


// Convenio
router.route('/convenio')
  .get(asyncHandler(ConvenioRoutes.list))
router
  .post("/convenio", [fileUpload()], asyncHandler(ConvenioRoutes.create))

router.route('/convenio/:id')
  .delete(asyncHandler(ConvenioRoutes.delete));


// Presidente
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

// Quem somos
router.route('/quem-somos')
  .get(asyncHandler(QuemSomosRoutes.list))
  .put(asyncHandler(QuemSomosRoutes.update));

// Notícias
router.route('/noticia')
  .get(asyncHandler(NoticiaRoutes.list))
router
  .post("/noticia", [fileUpload()], asyncHandler(NoticiaRoutes.create))

router.route('/noticia/:id')
  .delete(asyncHandler(NoticiaRoutes.delete));

// Estatuto
router
  .post("/estatuto", [fileUpload()], asyncHandler(EstatutoRoutes.update));
router
  .get("/estatuto", asyncHandler(EstatutoRoutes.list));

module.exports = router;
