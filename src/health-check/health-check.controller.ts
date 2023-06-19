import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from '@src/health-check/health-check.service';

@Controller()
export class HealthCheckController {
  /**
   * Inject repository dependency.
   */
  constructor(private readonly healthCheckService: HealthCheckService) {}

  /**
   * Return API status.
   */
  @Get()
  get() {
    return this.healthCheckService.get();
  }
}
