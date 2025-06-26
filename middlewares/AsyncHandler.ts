//asenkron fonksiyonları try catch kullanmadan try catch içine sarmak için kullanıyorum.

//parametre olarak asenkron fonksiyon alıyo
const asyncHandler = (fn: any) => (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);//eğer hata olursa next(error) çağırılır
};
export default asyncHandler;

//resolve promise olmasa bile onu sararak promise haline getirir.
//AsyncHandler belirli bir route etrafına sarılarak çalışır.