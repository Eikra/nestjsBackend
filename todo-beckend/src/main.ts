import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
  // await app.listen(3333);
}
bootstrap();
