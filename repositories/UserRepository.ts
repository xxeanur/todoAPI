import UserModel from '../models/UserModel'
import { User } from '../entities/User';


export class UserRepository {
    //User verisini veritabanına kaydeden fonksiyon//geriye bir şey döndürmez
    //typescripte asenkron fonksiyonlar otomatik olarak Promise döner.
    //promise işlemin sonucunun daha sonra döneceğini garanti eder. Olumlu ya da olumsuz.
    async create(user: User): Promise<User> {
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser.toObject() as User;
    }

    async findByEmail(email: string): Promise<User | null> {
        const userDoc = await UserModel.findOne({ email });
        return userDoc ? (userDoc.toObject() as User) : null;
    }
}