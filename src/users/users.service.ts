import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create_user.dt';

//aqui es donde creamos las consultas y sentencias
@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>){

    }

    create(user: CreateUserDto ){
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }

}
