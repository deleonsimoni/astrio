const express = require('express');
const asyncHandler = require('express-async-handler');

const PublicController = require('../controllers/public.controller');

const router = express.Router();

router.route('/')
  .get(asyncHandler(retrieve));

async function retrieve(_, res) {
  const data = await PublicController.retrieve();
  res.json(data);
}

module.exports = router;
