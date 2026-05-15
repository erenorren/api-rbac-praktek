import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
console.log('✅ Auth routes loaded: /register, /login');
const authController = new AuthController();

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;