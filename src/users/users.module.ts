import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
  //pasar la entidad con la cual quiero trabajar
  imports: [ TypeOrmModule.forFeature([User]) ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
