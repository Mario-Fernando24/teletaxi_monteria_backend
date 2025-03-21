import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constant';

@Module({
  imports: [ 
    JwtModule.register({
          secret: jwtConstants.secret,
          //h = horas d-dias
          signOptions: { expiresIn: '60s' },
        }),
    
    TypeOrmModule.forFeature([User]) ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
