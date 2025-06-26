import express from 'express';
import RegisterController from '../controllers/registerController';
import asyncHandler from '../middlewares/AsyncHandler'
const router=express.Router();

const registerController= new RegisterController();

router.route("/register").post(asyncHandler(registerController.register.bind(registerController)));

export default router;