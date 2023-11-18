const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/quizzes', require('./quizzes'));

module.exports = router;