import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ManualsModule } from './manuals/manuals.module';
import { MqttController } from './mqtt/mqtt.controller';
import { MqttService } from './mqtt/mqtt.service';
import { MqttModule } from './mqtt/mqtt.module';
import { MinioController } from './minio/minio.controller';
import { MinioService } from './minio/minio.service';
import { GloveModule } from './glove/glove.module';
import { GloveController } from './glove/glove.controller';
import { GloveService } from './glove/glove.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/cep?authSource=admin', 
    {
      user: 'root',
      pass: 'example',
      dbName: 'cep',
    }
  ), ManualsModule, MqttModule, GloveModule],
  controllers: [AppController, MqttController, MinioController, GloveController],
  providers: [AppService, MqttService, MinioService, GloveService],
})
export class AppModule {}
