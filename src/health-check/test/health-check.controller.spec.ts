import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from '@src/health-check/health-check.controller';
import { HealthCheckService } from '@src/health-check/health-check.service';

describe('HealthCheckController', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService],
    }).compile();

    controller = module.get<HealthCheckController>(HealthCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be "Parking API"', () => {
    const expected = {
      healthy: true,
      name: 'Parking API',
      version: process.env.npm_package_version,
    };
    expect(controller.get()).toBeDefined();
    expect(controller.get()).toMatchObject(expected);
  });
});
