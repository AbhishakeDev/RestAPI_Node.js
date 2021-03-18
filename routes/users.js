import express from 'express';
import { createUser, getIndividual, getUser, updateUser, deleteUser } from '../controllers/users.js';



const router = express.Router();

router.get('/', getUser)

router.post('/', createUser)

router.get('/:id', getIndividual)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;