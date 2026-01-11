import { Router } from "express";
import { Register, 
        Login,
        getProfile
 } from "../controllers/user.controller";
import {authMiddleware} from "../middlewares/auth.middlewares";

const router = Router();

router.post('/register', Register);
router.post('/login', Login )
router.get('/profile', authMiddleware, getProfile)
export default router;