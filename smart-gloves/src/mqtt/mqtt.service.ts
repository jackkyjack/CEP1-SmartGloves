import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { connect, MqttClient } from 'mqtt';

@Injectable()
export class MqttService implements OnModuleInit, OnModuleDestroy {
  private client: MqttClient;

  onModuleInit() {
    this.client = connect('mqtt://localhost:1883', {
      clientId: 'nestjs-client-' + Math.random().toString(16).slice(2),
    });

    this.client.on('connect', () => {
      console.log('✅ MQTT Connected');

      this.client.subscribe('test/topic', (err) => {
        if (!err) {
          console.log('📡 Subscribed to test/topic');
        }
      });
    });

    this.client.on('message', (topic, message) => {
      console.log(`📩 Message [${topic}]: ${message.toString()}`);
    });
  }

  publish(topic: string, message: string) {
    if (this.client && this.client.connected) {
      this.client.publish(topic, message);
    }
  }

  onModuleDestroy() {
    if (this.client) {
      this.client.end();
    }
  }
}
