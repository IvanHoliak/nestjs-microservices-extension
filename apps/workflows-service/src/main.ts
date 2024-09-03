import { NestFactory } from '@nestjs/core';
import { WorkflowsServiceModule } from './workflows-service.module';
import { Logger } from '@nestjs/common';

const PORT = 3001;

async function bootstrap() {
  const app = await NestFactory.create(WorkflowsServiceModule);

  const logger = new Logger();

  await app.listen(PORT);

  logger.log(`[🚀🚀🚀 Server] Workflows service is running on port ${PORT}`);
}
bootstrap();
