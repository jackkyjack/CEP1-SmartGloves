import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { MinioService } from './minio.service';

@Controller('minio')
export class MinioController {
  constructor(private readonly minioService: MinioService) {}

  @Post('create-bucket/:name')
  createBucket(@Param('name') name: string) {
    return this.minioService.createBucket(name);
  }

  @Post('upload/:bucket/:key')
  uploadFile(
    @Param('bucket') bucket: string,
    @Param('key') key: string,
    @Body() body: { content: string },
  ) {
    return this.minioService.uploadFile(bucket, key, body.content);
  }

  @Get('download/:bucket/:key')
  async downloadFile(@Param('bucket') bucket: string, @Param('key') key: string) {
    const file = await this.minioService.getFile(bucket, key);
    return file.toString();
  }
}
