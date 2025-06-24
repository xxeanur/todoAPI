import express from 'express'
import registerRoute from './registerRoute'
//app.ts de tek bir yerden yönetmek için yaptım bunu.
const router=express.Router();

router.use(registerRoute);

export default router;