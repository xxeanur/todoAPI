import { mapper } from '../mappings/mapper';
import bcrypt from 'bcryptjs';
import CreateUserDTO from '../../DTOs/CreateUserDTO';
import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository'
import ClientSideException from '../../utils/clientSideExceptions';
import { Messages } from '../../constants/message'

//servis : işi yapar
export class RegisterService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(dto: CreateUserDTO) {
        //eğer kullanıcı emaili veritabanında varsa tekrar kayıt yapamasın.Dolayısıyla Client'a zaten kayıtlı hesap mesajı döndürelim.
        if (await this.userRepository.findByEmail(dto.email)) {
            throw new ClientSideException(Messages.EmailAlreadyTaken, 400);
        }
        
        if (dto.password !== dto.confirmPassword) {
            throw new ClientSideException("Şifreler eşleşmiyor", 400);
        }

        //şifre Hash
        dto.password = await bcrypt.hash(dto.password, 10);
        //DTOdan entitye dönüştür.
        const userEntity = mapper.map(dto, User, CreateUserDTO);
        // console.log(" Mapping successful:", userEntity);

        //Repository ile kullanıcıyı kaydet
        await this.userRepository.create(userEntity);

        return { message: Messages.RegistrationSuccess }
    }
}