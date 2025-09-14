import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ManualsModule } from './manuals/manuals.module';
import { MqttController } from './mqtt/mqtt.controller';
import { MqttService } from './mqtt/mqtt.service';
import { MqttModule } from './mqtt/mqtt.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/cep?authSource=admin', 
    {
      user: 'root',
      pass: 'example',
      dbName: 'cep',
    }
  ), ManualsModule, MqttModule],
  controllers: [AppController, MqttController],
  providers: [AppService, MqttService],
})
export class AppModule {}
