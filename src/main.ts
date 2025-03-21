import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//el que creA que estara escuchando en el puesto 3000 y es donde debemos apuntar para levantar el backend
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
