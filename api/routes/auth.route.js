import express from 'express';
import { signup } from '../controllers/Auth.controller';

const router = express.Router();

router.post("/signup",signup)

export default router;