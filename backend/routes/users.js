const express = require("express");
const router = express.Router();

const usersController = require('../controllers/users');
const validation = require('../middleware/validate');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);
router.post('/', validation.saveContact, usersController.createUser);
router.put('/:id', validation.saveContact, usersController.updateUser);
router.delete('/:id', usersController.deleteUser);



module.exports = router;