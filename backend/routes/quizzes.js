const express = require('express');
const router = express.Router();

const quizzesController = require('../controllers/quizzes');
const validation = require('../middleware/validate');


//C# Quiz Routes
router.get('/', quizzesController.getAllCSharp);
router.get('/:id', quizzesController.getSingleCSharp);
router.post('/', validation.saveQuiz, quizzesController.createQuestionCSharp);
router.put('/:id', validation.saveQuiz, quizzesController.updateQuestionCSharp);
router.delete('/:id', quizzesController.deleteQuestionCSharp);

//TypeScript Quiz Routes

module.exports = router;
