import { Module } from '@nestjs/common';
import { HealthCheckController } from '@src/health-check/health-check.controller';
import { HealthCheckService } from '@src/health-check/health-check.service';

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
