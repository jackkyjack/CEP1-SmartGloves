import { Injectable } from '@nestjs/common';

@Injectable()
export class GloveService {
  processData(rawData: string) {
  const lines = rawData.trim().split('|');
  console.log(`Received ${lines.length} frames`);
  console.log('lines:', lines);

  return {
    status: 'success',
    frames: lines.length
  };
}
}