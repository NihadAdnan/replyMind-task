import express from 'express';
import {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserById
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUserById); 

export default router;
