import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { ParkingLotService } from '@src/parking-lot/parking-lot.service';
import { CreateParkingLotDto } from '@src/parking-lot/dto/create-parking-lot.dto';
import { UpdateParkingLotDto } from '@src/parking-lot/dto/update-parking-lot.dto';

@Controller('parking-lot')
export class ParkingLotController {
  /**
   * Inject service dependency.
   */
  constructor(private readonly parkingLotService: ParkingLotService) {}

  /**
   * Create a new parking lot.
   */
  @ApiParam({
    name: 'carCapacity',
    required: true,
    description: 'Capacity for cars into Parking Lot',
    type: 'integer',
    example: 20,
  })
  @ApiParam({
    name: 'motorcycleCapacity',
    required: true,
    description: 'Capacity for motorcycles into Parking Lot',
    type: 'integer',
    example: 10,
  })
  @ApiParam({
    name: 'phone',
    required: true,
    description: 'Phone of Parking Lot company',
    type: 'string',
    example: '2190009090',
  })
  @ApiParam({
    name: 'address',
    required: true,
    description: 'Address of Parking Lot company',
    type: 'string',
    example: 'Rua das Casas, 42, Centro - Rio de Janeiro',
  })
  @ApiParam({
    name: 'document',
    required: true,
    description: 'Document of Parking Lot company',
    type: 'string',
    example: '00.000.000/0000-00',
  })
  @ApiParam({
    name: 'name',
    required: true,
    description: 'Parking Lot name',
    type: 'string',
    example: 'Parking Lot #01',
  })
  @Post()
  create(@Body() createParkingLotDto: CreateParkingLotDto) {
    return this.parkingLotService.create(createParkingLotDto);
  }

  /**
   * Find all parking lots.
   */
  @Get()
  findAll() {
    return this.parkingLotService.findAll();
  }

  /**
   * Find one parking lot.
   */
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Parking Lot to be finded',
    type: 'integer',
    example: 1,
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.parkingLotService.findOne(id);
  }

  /**
   * Update one parking lot.
   */
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Parking Lot to be updated',
    type: 'integer',
    example: 1,
  })
  @ApiParam({
    name: 'carCapacity',
    required: false,
    description: 'Capacity for cars into Parking Lot',
    type: 'integer',
    example: 20,
  })
  @ApiParam({
    name: 'motorcycleCapacity',
    required: false,
    description: 'Capacity for motorcycles into Parking Lot',
    type: 'integer',
    example: 10,
  })
  @ApiParam({
    name: 'phone',
    required: false,
    description: 'Phone of Parking Lot company',
    type: 'string',
    example: '2190009090',
  })
  @ApiParam({
    name: 'address',
    required: false,
    description: 'Address of Parking Lot company',
    type: 'string',
    example: 'Rua das Casas, 42, Centro - Rio de Janeiro',
  })
  @ApiParam({
    name: 'document',
    required: false,
    description: 'Document of Parking Lot company',
    type: 'string',
    example: '00.000.000/0000-00',
  })
  @ApiParam({
    name: 'name',
    required: false,
    description: 'Parking Lot name',
    type: 'string',
    example: 'Parking Lot #01',
  })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateParkingLotDto: UpdateParkingLotDto,
  ) {
    return this.parkingLotService.update(id, updateParkingLotDto);
  }

  /**
   * Delete one parking lot.
   */
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Parking Lot to be deleted.',
    type: 'integer',
    example: 1,
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.parkingLotService.remove(id);
  }
}
