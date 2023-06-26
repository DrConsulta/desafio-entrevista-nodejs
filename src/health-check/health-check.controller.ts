import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HealthCheckGetSwagger } from '@src/health-check/swagger/health-check.get.swagger';
import { HealthCheckService } from '@src/health-check/health-check.service';

@Controller()
@ApiTags('Health Check')
export class HealthCheckController {
  /**
   * Inject repository dependency.
   */
  constructor(private readonly healthCheckService: HealthCheckService) {}

  /**
   * Return API status.
   */
  @Get()
  @ApiOperation({ summary: 'Check health of API' })
  @ApiResponse({
    status: 200,
    description: 'Check health of API',
    type: HealthCheckGetSwagger,
  })
  get() {
    return this.healthCheckService.get();
  }
}
