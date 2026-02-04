import { Module } from '@nestjs/common';
import { GloveController } from './glove.controller';
import { GloveService } from './glove.service';

@Module({
  controllers: [GloveController],
  providers: [GloveService],
})
export class GloveModule {}