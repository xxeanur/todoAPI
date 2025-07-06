import express from 'express';
import RegisterController from '../controllers/registerController';
import asyncHandler from '../middlewares/AsyncHandler'
import {validate} from '../middlewares/validate'
import {createUserSchema} from '../validations/userValidation';
const router=express.Router();

const registerController= new RegisterController();

router.route("/register").post(validate(createUserSchema),asyncHandler(registerController.register.bind(registerController)));

export default router;