import { Router } from "express";
import { Register } from "../controllers/user.controller";

const router = Router();

router.get('/test', (req, res) => {
        res.send('test')
})

router.post('/register', Register);
export default router;