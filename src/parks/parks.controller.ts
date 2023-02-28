import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParksService } from './parks.service';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';

@Controller('parks')
export class ParksController {
  constructor(private readonly parksService: ParksService) {}

  @Post()
  create(@Body() createParkDto: CreateParkDto) {
    return this.parksService.create(createParkDto);
  }

  @Get()
  findAll() {
    return this.parksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParkDto: UpdateParkDto) {
    return this.parksService.update(+id, updateParkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parksService.remove(+id);
  }
}
