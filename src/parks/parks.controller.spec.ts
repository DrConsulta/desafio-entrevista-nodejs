import { Test, TestingModule } from '@nestjs/testing';
import { ParksController } from './parks.controller';
import { ParksService } from './parks.service';

describe('ParksController', () => {
  let controller: ParksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParksController],
      providers: [ParksService],
    }).compile();

    controller = module.get<ParksController>(ParksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
