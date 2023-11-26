const express = require('express');
const router = express.Router();
const csharpController = require('../controllers/csharpController');
const typescriptController = require('../controllers/typescriptController');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/csharp', csharpController.getAllCSharp);
router.get('/csharp/:id', csharpController.getSingleCSharp);
router.post('/csharp', isAuthenticated, csharpController.createQuestionCSharp);
router.put('/csharp/:id', isAuthenticated, csharpController.updateQuestionCSharp);
router.delete('/csharp/:id', isAuthenticated, csharpController.deleteQuestionCSharp);


router.get('/typescript', typescriptController.getAllTypeScript);
router.get('/typescript/:id', typescriptController.getSingleTypeScript);
router.post('/typescript', isAuthenticated, typescriptController.createQuestionTypeScript);
router.put('/typescript/:id', isAuthenticated, typescriptController.updateQuestionTypeScript);
router.delete('/typescript/:id', isAuthenticated, typescriptController.deleteQuestionTypeScript);

module.exports = router;
