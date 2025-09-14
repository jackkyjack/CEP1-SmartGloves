import { Injectable, NotFoundException } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { CreateManualDto } from './dto/create-manual.dto';
import { UpdateManualDto } from './dto/update-manual.dto';
import {Manual, ManualDocument} from './schemas/manual.schema';

@Injectable()
export class ManualsService {

  constructor(@InjectModel(Manual.name) private manualModel: Model<ManualDocument>) {}
  
  async create(createManualDto: CreateManualDto): Promise<Manual> {
    const result = new this.manualModel(createManualDto);
    return result.save();
  }

  async findAll(): Promise<Manual[]> {
    return this.manualModel.find().exec();
  }

  async findOne(id: string): Promise<Manual> {
    const manual = await this.manualModel.findById(id).exec();
    if (!manual) {
      throw new NotFoundException(`Manual with id ${id} not found`);
    }
    return manual;
  }

  async update(id: string, updateManualDto: UpdateManualDto): Promise<Manual> {
    const result = await this.manualModel
    .findByIdAndUpdate(id, updateManualDto, {new: true})
    .exec();
    if (!result) {
      throw new NotFoundException(`Manual with id ${id} not found`);
    }
    return result;
  }

  async remove(id: string){
    try{
      const result = await this.manualModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('id not found');
      }
      return {message: 'Delete successful'};
    } catch (error){
      throw error;
    }
}
}
