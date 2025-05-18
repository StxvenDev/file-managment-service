import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<NestMicroserviceOptions>(AppModule,{
    
  });
  await app.listen();
}
bootstrap();
