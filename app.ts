import {mapper} from './service/mappings/mapper';
import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db';
import router from './routes/index';


dotenv.config();//dootenv yapılandırması olmadan .env ye erişilemez.
connectDB();

const app=express();
const port=process.env.PORT||5001;

//middlewares
app.use(express.json());//istekleri json formatında okuması için kullanıyoruz.

app.use("/api",router);// Tek bir yerden routes işlemlerini kontrol edeceğim.




app.listen(port,()=>{
    console.log(`Server ${port} portundan çalışıyor`);   
})