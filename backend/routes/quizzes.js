const express = require('express');
const router = express.Router();
const csharpController = require('../controllers/csharpController');
const typescriptController = require('../controllers/typescriptController');
const validation = require('../middleware/validate');


router.get('/csharp', csharpController.getAllCSharp);
router.get('/csharp/:id', csharpController.getSingleCSharp);
router.post('/csharp', validation.saveQuiz, csharpController.createQuestionCSharp);
router.put('/csharp/:id', validation.saveQuiz, csharpController.updateQuestionCSharp);
router.delete('/csharp/:id', csharpController.deleteQuestionCSharp);


router.get('/typescript', typescriptController.getAllTypeScript);
router.get('/typescript/:id', typescriptController.getSingleTypeScript);
router.post('/typescript', validation.saveQuiz, typescriptController.createQuestionTypeScript);
router.put('/typescript/:id', validation.saveQuiz, typescriptController.updateQuestionTypeScript);
router.delete('/typescript/:id', typescriptController.deleteQuestionTypeScript);

module.exports = router;
