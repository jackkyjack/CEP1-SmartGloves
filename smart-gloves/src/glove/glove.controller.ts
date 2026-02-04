import { Controller, Post, Body, Logger } from '@nestjs/common';
import { GloveService } from './glove.service';
import { CreateGloveDataDto } from './dto/create-glove-data.dto'; // Import DTO มาใช้

@Controller('glove')
export class GloveController {
  private readonly logger = new Logger(GloveController.name);

  constructor(private readonly gloveService: GloveService) {}

  @Post('upload')
  async handleUpload(@Body() createGloveDataDto: CreateGloveDataDto) {
    this.logger.log('--- New Gesture Received ---');
    
    // ส่งข้อมูลต่อให้ Service ประมวลผล
    return this.gloveService.processData(createGloveDataDto.rawData);
  }
}