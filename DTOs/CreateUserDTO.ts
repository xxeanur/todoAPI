//Bu sınıf, istemciden alınan veriyi temsil eder. Örn: kullanıcıdan gelen username, email, password vs.

import { AutoMap } from '@automapper/classes';

export default class CreateUserDTO {
    @AutoMap()
    username!: string;

    @AutoMap()
    email!: string;

    @AutoMap()
    password!: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}