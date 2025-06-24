import express from 'express';
import register from '../controllers/registerController';
import RegisterController from '../controllers/registerController';

const router=express.Router();

const registerController= new RegisterController();

router.route("/register").post(registerController.register.bind(registerController));

export default router;