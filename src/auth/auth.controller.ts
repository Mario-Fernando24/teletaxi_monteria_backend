import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { register } from 'module';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('register')
    register(@Body() register: RegisterAuthDto) {
        return this.authService.register(register);
    }

    @Post('login')
    login(@Body() loginDta: LoginAuthDto) {
        return this.authService.login(loginDta);
    }
     
}
