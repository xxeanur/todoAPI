// models/UserModel.ts
import mongoose from 'mongoose';


//Şema: DB de bir koleksiyonda saklanacak belgelerin yapısını belirler.Burada kullanıcıya ait verilerin nasıl saklanacağı tanımlanıyor.
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  //unique: bir email ile bir hesap oluşturulabilir.
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // profileImage: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },//kullancı hesabı ne zaman oluştu? Eğer bu bilgi gelmezse otomatik oalrak şuanın tarihi verilsin. 
});

//şemayı modele dönüştürdük. mongoDB deki koleksiyonun ismi User olacak. Ve bu modelin verisi userSchemaya ya göre saklansın.
const UserModel =mongoose.model('User', UserSchema);
export default UserModel;
