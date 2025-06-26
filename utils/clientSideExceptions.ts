//kendi özel hata sınıfımı oluşturdum.

export default class ClientSideException extends Error{
    // public message: string;
    public statusCode:number;

    constructor(message:string,statusCode:number){
        super(message);//Error sınıfının constructorına message'yi gönderir
        this.statusCode=statusCode;
        // this.message=message; super bu işlemi zaten yapıyor 
        Error.captureStackTrace(this,this.constructor);//hata nerede ve nasıl oluşmuş adım adım gösterir.
        
    }

}