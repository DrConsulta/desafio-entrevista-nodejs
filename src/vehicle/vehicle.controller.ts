import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { AuthGuard } from '@src/auth/auth.guard';
import { VehicleService } from '@src/vehicle/vehicle.service';
import { CreateVehicleDto } from '@src/vehicle/dto/create-vehicle.dto';
import { UpdateVehicleDto } from '@src/vehicle/dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  /**
   * Inject service dependency.
   */
  constructor(private readonly vehicleService: VehicleService) {}

  /**
   * Create a new vehicle.
   */
  @ApiParam({
    name: 'type',
    required: true,
    description: 'Vehicle type',
    type: 'string',
    example: 'Car',
  })
  @ApiParam({
    name: 'licensePlate',
    required: true,
    description: 'Vehicle licensed plate',
    type: 'string',
    example: 'AAA 0000',
  })
  @ApiParam({
    name: 'collor',
    required: true,
    description: 'Vehicle collor',
    type: 'string',
    example: 'Black',
  })
  @ApiParam({
    name: 'model',
    required: true,
    description: 'Vehicle model',
    type: 'string',
    example: 'Civic',
  })
  @ApiParam({
    name: 'brand',
    required: true,
    description: 'Vehicle brand',
    type: 'string',
    example: 'Honda',
  })
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  /**
   * Find all vehicles.
   */
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  /**
   * Find one vehicle.
   */
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Vehicle to be finded',
    type: 'integer',
    example: 1,
  })
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.vehicleService.findOne(id);
  }

  /**
   * Update one vehicle.
   */
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Vehicle to be updated',
    type: 'integer',
    example: 1,
  })
  @ApiParam({
    name: 'type',
    required: true,
    description: 'Vehicle type',
    type: 'string',
    example: 'Car',
  })
  @ApiParam({
    name: 'licensePlate',
    required: true,
    description: 'Vehicle licensed plate',
    type: 'string',
    example: 'AAA 0000',
  })
  @ApiParam({
    name: 'collor',
    required: true,
    description: 'Vehicle collor',
    type: 'string',
    example: 'Black',
  })
  @ApiParam({
    name: 'model',
    required: true,
    description: 'Vehicle model',
    type: 'string',
    example: 'Civic',
  })
  @ApiParam({
    name: 'brand',
    required: true,
    description: 'Vehicle brand',
    type: 'string',
    example: 'Honda',
  })
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update(id, updateVehicleDto);
  }

  /**
   * Delete one vehicle.
   */
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Vehicle to be deleted',
    type: 'integer',
    example: 1,
  })
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vehicleService.remove(id);
  }
}
