const router = require('express').Router();

const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
