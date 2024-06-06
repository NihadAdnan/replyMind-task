import express from 'express'
import { createUser, deleteUserById, getUserById, updateUserById } from '../controllers/userController.js';


const router = express.Router();

router.post('/', createUser);

router.get('/:id', getUserById);

router.put('/:id', updateUserById);

router.delete('/:id', deleteUserById);

export default router
