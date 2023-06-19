import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckService } from '@src/health-check/health-check.service';

describe('HealthCheckService', () => {
  let service: HealthCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthCheckService],
    }).compile();

    service = module.get<HealthCheckService>(HealthCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be "Parking API"', () => {
    const expected = {
      healthy: true,
      name: 'Parking API',
      version: process.env.npm_package_version,
    };
    expect(service.get()).toBeDefined();
    expect(service.get()).toMatchObject(expected);
  });
});
