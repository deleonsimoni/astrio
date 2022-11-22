const express = require('express');
const asyncHandler = require('express-async-handler');

const PublicController = require('../controllers/public.controller');
const PresidenteRoutes = require('./presidente.route');
const DiretorRoutes = require('./diretor.route');

const router = express.Router();

async function retrieve(_, res) {
  const data = await PublicController.retrieve();
  res.json(data);
}

router.route('/')
  .get(asyncHandler(retrieve));

router.route('/presidentes')
  .get(asyncHandler(PresidenteRoutes.list));

router.route('/diretores')
  .get(asyncHandler(DiretorRoutes.list));

module.exports = router;
