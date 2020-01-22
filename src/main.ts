import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Accept, X-Custom-Header"
  };

  const app = await NestFactory.create(AppModule, { cors });
  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default bootstrap()
