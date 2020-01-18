import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  return app.getHttpAdapter().getInstance().handle;
}

export default bootstrap()
