import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { register } from 'module';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('register')
    create(@Body() register: RegisterUserDto) {
        return this.authService.register(register);
    }
     
}
