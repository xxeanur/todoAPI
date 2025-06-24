// entities/User.ts
import { AutoMap } from '@automapper/classes';

export class User {
    @AutoMap()
    username!: string;

    @AutoMap()
    email!: string;

    @AutoMap()
    password!: string;

    @AutoMap()
    profileImage?: string;

    @AutoMap()
    createdAt?: Date;

    constructor(username: string, email: string, password: string, profileImage?: string, createdAt?: Date) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.profileImage = profileImage;
        this.createdAt = createdAt;
    }
}
