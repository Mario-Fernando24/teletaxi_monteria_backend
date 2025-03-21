import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcryptjs'; 

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){

    }


   async register(user: RegisterAuthDto){

        //Metodo (findOneBy) nos ayuda buscar un usuario atravez de un campo especifico
        const emailExist = await this.userRepository.findOneBy({email: user.email})
        console.log(user);

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

    async login(loginData: LoginAuthDto){
        //vericar si el email existe en la base de datos
        const { email, password } = loginData;
        
        const usersEncontrado = await this.userRepository.findOneBy({email: email})

        if(!usersEncontrado){
          return new HttpException('Email no existe', HttpStatus.NOT_FOUND)
        }
        
        //Si el password es igual al de la base de datos
        const isPasswordValid = await bcrypt.compare(password, usersEncontrado.password);
        if (!isPasswordValid) {
            return new HttpException('La contraseña es incorrecta', HttpStatus.FORBIDDEN)
        } 

        return usersEncontrado;



    }


}
