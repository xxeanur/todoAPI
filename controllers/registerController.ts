import { Request, Response } from 'express';
import CreateUserDTO from '../DTOs/CreateUserDTO';
import { RegisterService } from '../service/services/registerService';
import { privateDecrypt } from 'crypto';
import { error } from 'console';


export default class RegisterController {
    private registerService: RegisterService;

    constructor() {
        this.registerService = new RegisterService();
    }

     public async   register(req: Request, res: Response) {
        const { username, email, password } = req.body;
        const dto = new CreateUserDTO(username, email, password);

        try {
            const result = await this.registerService.register(dto);
            res.status(201).json(result);
        } catch (error: unknown) {
            // Type güvenliği için "error instanceof Error" kontrolü yapılır
            if (error instanceof Error) {
                if (error.message.includes("Bu e-posta zaten kayıtlı.")) {
                    res.status(400).json({ message: error.message });
                    return;
                }
            }

            // MongoDB duplicate key hatası için fallback
            const err = error as any;
            if (err.code === 11000) {
                res.status(400).json({ message: 'Bu e-posta zaten kayıtlı.' });
                return;
            }

            console.error("Register error:", error);
            res.status(500).json({ message: 'Kayıt başarısız', error: (error as Error).message });
        }
    }

}






// const register = async (req: Request, res: Response) => {
//     try {
//         const { username, email, password } = req.body;
//         const dto = new CreateUserDTO(username, email, password);
//      const service = new RegisterService();
//         const result = await service.register(dto);
//         res.status(201).json(result);
//     } catch (error: any) {
//         if(error.message.includes("Bu e-posta zaten kayıtlı.")){
//             res.status(400).json({ message: error.message });
//             return;
//         }
//         if(error.code===11000){
//             res.status(400).json({ message: 'Bu e-posta zaten kayıtlı.' });
//             return;
//         }

//         console.error("Register error:", error); // Hata nedenini gör
//         res.status(500).json({ message: 'Kayıt başarısız', error:error.message });
//     }
// }

// export default register

