import { Router } from 'express'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/usersController'

const router = Router();
router.get('/health', (req, res) => res.send('api is healthy'));
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;