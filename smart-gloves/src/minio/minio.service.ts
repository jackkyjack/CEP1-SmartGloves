import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class MinioService {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      endpoint: 'http://127.0.0.1:9000', // MinIO server
      accessKeyId: 'minioadmin',         // หรือ username ของคุณ
      secretAccessKey: 'minioadmin',     // หรือ password ของคุณ
      s3ForcePathStyle: true,            // จำเป็นสำหรับ MinIO
    });
  }

  async createBucket(bucketName: string) {
    try {
      await this.s3.createBucket({ Bucket: bucketName }).promise();
      console.log(`Bucket ${bucketName} created!`);
    } catch (err) {
      console.error(err);
    }
  }

  async uploadFile(bucketName: string, key: string, file: Buffer | string) {
    try {
      await this.s3
        .putObject({
          Bucket: bucketName,
          Key: key,
          Body: file,
        })
        .promise();
      console.log(`File ${key} uploaded to ${bucketName}`);
    } catch (err) {
      console.error(err);
    }
  }

  async getFile(bucketName: string, key: string): Promise<Buffer> {
    try {
      const data = await this.s3.getObject({ Bucket: bucketName, Key: key }).promise();
      return data.Body as Buffer;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
