// Bu bir Generic sınıf. <T> sayesinde her türde veri (string, User, Todo, null vs.) bu sınıfa gönderilebilir. Amaç: başarılı ya da başarısız API yanıtlarını tek bir biçimde döndürmek.
export default class CustomResponseDto<T> {
    constructor(
        public Content?: T | null,//APInın döndüğü asıl veri.
        public IsSuccess?: boolean,
        public ErrorMessage?: string | null//başarılıysa null hata yok
    ) { }

    //Success<T>: metodun generic tip parametresi T.  Bu, metodun parametresinin tipi neyse ona göre çalışmasını sağlar.
    //(data: T) Metodun parametresi data ve tipi T. Yani ne tür veri verirsen o türde olur.
    //: CustomResponseDto<T> Bu metodun dönüş tipi. Yani aynı T türüne sahip bir CustomResponseDto nesnesi döndürecek.

    static Success<T>(data: T): CustomResponseDto<T> {
        return new CustomResponseDto(data, true, null); //burada <T> kullanmadık çünkü dataya gelen T den anlıyor typescript.
    }
    //default null demek 
    static Fail<T = null>(message: string): CustomResponseDto<T> {
        return new CustomResponseDto<T>(null, false, message);//burada anlamıyor çünkü mesaj string, T kullanılmadı. 
    }
}


//Generic, programlamada fonksiyonların, sınıfların, interface’lerin veya metodların içinde kullandığımız tiplerin (type) dışarıdan dinamik olarak belirlenmesini sağlayan bir yapıdır.