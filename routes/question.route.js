const express = require('express');
const controller = require('../src/controller/questions.controller')

const router = express.Router();

router.get('/questions', controller.getQuestions);

module.exports = router;
