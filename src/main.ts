import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppClusterService } from './app_cluster.service';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// bootstrap();
AppClusterService.clusterize(bootstrap);