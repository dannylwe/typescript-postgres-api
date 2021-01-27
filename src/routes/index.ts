import { Router } from 'express'

const router = Router();
router.get('/health', (req, res) => res.send('api is healthy'));

export default router;