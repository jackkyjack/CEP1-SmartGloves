import { Test, TestingModule } from '@nestjs/testing';
import { ManualsService } from './manuals.service';

describe('ManualsService', () => {
  let service: ManualsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManualsService],
    }).compile();

    service = module.get<ManualsService>(ManualsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
