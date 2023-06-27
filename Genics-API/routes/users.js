const router = require('express').Router();
const userController = require('../controllers/usersController');

router.get('/', userController.getUsers);
router.post('/', userController.saveUser);

module.exports = router;
