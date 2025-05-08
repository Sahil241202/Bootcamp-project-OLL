// backend/routes/auth.route.js
import express from 'express';
import { login, register, verifyToken } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/verify', protect, verifyToken)

export default router;