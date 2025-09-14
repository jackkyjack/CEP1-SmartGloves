import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ManualDocument = Manual & Document;

@Schema()
export class Manual {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  url: string;
}

export const ManualSchema = SchemaFactory.createForClass(Manual);