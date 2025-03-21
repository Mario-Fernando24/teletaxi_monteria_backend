import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){

    }


   async register(user: RegisterUserDto){

        //Metodo (findOneBy) nos ayuda buscar un usuario atravez de un campo especifico
        const emailExist = await this.userRepository.findOneBy({email: user.email})
        
        if(emailExist){
            //409
            return new HttpException('El email ya esta registrado', HttpStatus.CONFLICT)
        }
        const phoneExist = await this.userRepository.findOneBy({phone: user.phone})
        
        if(phoneExist){
            //409
            return new HttpException('El Telefono ya esta registrado', HttpStatus.CONFLICT)
        }
        
        const newUserRegister = this.userRepository.create(user);
        return this.userRepository.save(newUserRegister);
    }


}
