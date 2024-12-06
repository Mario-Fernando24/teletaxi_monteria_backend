import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dt';
import { UsersService } from './users.service';

//donde definimos las rutas de nuestro api rest
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){

    }
 
    @Post()
    create(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

}
