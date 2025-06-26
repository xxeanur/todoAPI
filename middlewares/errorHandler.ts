
//Bu middleware, projende oluşan hataları merkezi olarak yakalayıp, kullanıcıya düzenli ve anlaşılır bir cevap döner.

import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import ClientSideException from '../utils/clientSideExceptions';
import CustomResponseDto from '../DTOs/CustomResponseDTO';

// Uygulama genelindeki hataları yakalayan merkezi hata yönetimi middleware’i
export const ErrorHandler = ((
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // İstemci kaynaklı özel hata
    if (err instanceof ClientSideException) {
        return res.status(err.statusCode).json(
            CustomResponseDto.Fail<null>(err.message)
        );
    }

    // MongoDB duplicate key hatası
    if ((err as any)?.code === 11000) {
        return res.status(400).json(
            CustomResponseDto.Fail<null>('This email is already taken.')
        );
    }

    // Diğer tüm hatalar (sunucu hatası)
    // console.error('[ErrorHandler] Internal Error:', err);

    return res.status(500).json(
        CustomResponseDto.Fail<null>('Internal Server Error')
    );
}) as unknown as ErrorRequestHandler;
//typesript void dönmesini istiyo ErrorRequestHandlerin fakat ben res döndürüyorum. Tip hatasını önlemek için yazıyorum.