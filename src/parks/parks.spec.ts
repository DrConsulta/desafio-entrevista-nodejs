import { Test, TestingModule } from '@nestjs/testing';
import { Parks } from './parks';

describe('Parks', () => {
  let provider: Parks;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Parks],
    }).compile();

    provider = module.get<Parks>(Parks);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
