import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  const port = 8888;
  await app.listen(port, '0.0.0.0', () => {
    console.log(
      'Server is running on: \x1b[36m%s\x1b[0m',
      `http://localhost:${port}`,
    );
  });
}
bootstrap();
