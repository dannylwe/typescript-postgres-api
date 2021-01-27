import { Router } from 'express'
import { getUsers } from '../controllers/usersController'

const router = Router();
router.get('/health', (req, res) => res.send('api is healthy'));
router.get('/users', getUsers);
// router.post('/users', getUsers);
// router.get('/users/:id', getUsers);
// router.put('/users/:id', getUsers);
// router.delete('/users/:id', getUsers);

export default router;