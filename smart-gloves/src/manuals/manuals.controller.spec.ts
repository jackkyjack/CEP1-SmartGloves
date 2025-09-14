import { Test, TestingModule } from '@nestjs/testing';
import { ManualsController } from './manuals.controller';
import { ManualsService } from './manuals.service';

describe('ManualsController', () => {
  let controller: ManualsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManualsController],
      providers: [ManualsService],
    }).compile();

    controller = module.get<ManualsController>(ManualsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
