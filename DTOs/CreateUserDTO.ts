//Bu sınıf, istemciden alınan veriyi temsil eder. Örn: kullanıcıdan gelen username, email, password vs.

import { AutoMap } from '@automapper/classes';

export default class CreateUserDTO {
    @AutoMap()
    username!: string;

    @AutoMap()
    email!: string;

    @AutoMap()
    password!: string;
    
    @AutoMap()
    confirmPassword?:string;

    constructor(username: string, email: string, password: string, confirmPassword: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword=confirmPassword;
    }
}