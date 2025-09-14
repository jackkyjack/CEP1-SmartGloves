import { Controller, Get } from '@nestjs/common';
import { MqttService } from './mqtt.service';

@Controller('mqtt')
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @Get('send')
  sendMessage() {
    this.mqttService.publish('test/topic', 'Hello from NestJS');
    return 'Message sent';
  }
}
