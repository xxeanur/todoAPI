import { NextFunction, Request, Response } from 'express';
import CreateUserDTO from '../DTOs/CreateUserDTO';
import { RegisterService } from '../service/services/registerService';

//registerController.ts : sadece gelen istekleri yönlendirir.

export default class RegisterController {
    private registerService: RegisterService;

    constructor() {
        this.registerService = new RegisterService();
    }
    public async register(req: Request, res: Response, next: NextFunction) {
        const { username, email, password } = req.body;
        const dto = new CreateUserDTO(username, email, password);
        const result = await this.registerService.register(dto);
        res.status(201).json(result);

    }
}





