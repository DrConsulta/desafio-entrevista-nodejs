import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthCheckModule } from '@src/health-check/health-check.module';

const importedModules = [HealthCheckModule];
@Module({
  imports: [
    ...importedModules,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
