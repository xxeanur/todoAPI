//validasyon ayarları için oluşturduğum ara katman.

import {NextFunction,Response,Request} from 'express';
import {ZodSchema,ZodError, Schema} from 'zod'
import ClientSideException from '../utils/clientSideExceptions';

export const validate=(schema:ZodSchema)=>(req:Request,res:Response,next:NextFunction)=>{
    try{
        schema.parse(req.body);
        next();
    }catch(error:any){
        if(error instanceof ZodError){
            const messages = error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
            throw new ClientSideException(messages, 400);
        }
        next(error);//sıradaki middleware veya route çalışır.
    }

}
