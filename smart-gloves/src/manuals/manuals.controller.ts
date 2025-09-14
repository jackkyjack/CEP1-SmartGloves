import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManualsService } from './manuals.service';
import { CreateManualDto } from './dto/create-manual.dto';
import { UpdateManualDto } from './dto/update-manual.dto';

@Controller('manuals')
export class ManualsController {
  constructor(private readonly manualsService: ManualsService) {}

  @Post()
  create(@Body() createManualDto: CreateManualDto) {
    return this.manualsService.create(createManualDto);
  }

  @Get()
  findAll() {
    return this.manualsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manualsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManualDto: UpdateManualDto) {
    return this.manualsService.update(id, updateManualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manualsService.remove(id);
  }
}
