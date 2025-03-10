const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const validator = require('../middleware/validator');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', validator, usersController.createUser);
router.put('/:id', validator, usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
