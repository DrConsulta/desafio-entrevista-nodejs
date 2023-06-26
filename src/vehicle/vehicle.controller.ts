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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VehicleRequestSwagger } from '@src/vehicle/swagger/vehicle.request.swagger';
import { VehicleFindAllSwagger } from '@src/vehicle/swagger/vehicle.find-all.swagger';
import { VehicleBadRequestSwagger } from '@src/vehicle/swagger/vehicle.bad-request.swagger';
import { VehicleUnauthorizedSwagger } from '@src/vehicle/swagger/vehicle.unauthorized.swagger';
import { VehicleNotFoundSwagger } from '@src/vehicle/swagger/vehicle.not-found.swagger';
import { AuthGuard } from '@src/auth/auth.guard';
import { VehicleService } from '@src/vehicle/vehicle.service';
import { CreateVehicleDto } from '@src/vehicle/dto/create-vehicle.dto';
import { UpdateVehicleDto } from '@src/vehicle/dto/update-vehicle.dto';

@Controller('vehicle')
@ApiTags('Vehicles')
export class VehicleController {
  /**
   * Inject service dependency.
   */
  constructor(private readonly vehicleService: VehicleService) {}

  /**
   * Create a new vehicle.
   */
  @Post()
  @ApiOperation({ summary: 'Create a new vehicle.' })
  @ApiResponse({
    status: 201,
    description: 'Create a new vehicle.',
    type: VehicleRequestSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Create a new vehicle bad request.',
    type: VehicleBadRequestSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for create a new vehicle.',
    type: VehicleUnauthorizedSwagger,
  })
  @UseGuards(AuthGuard)
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  /**
   * Find all vehicles.
   */
  @Get()
  @ApiOperation({ summary: 'Find all vehicles.' })
  @ApiResponse({
    status: 200,
    description: 'Find all vehicles.',
    type: VehicleFindAllSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for find all vehicles.',
    type: VehicleUnauthorizedSwagger,
  })
  @UseGuards(AuthGuard)
  findAll() {
    return this.vehicleService.findAll();
  }

  /**
   * Find one vehicle.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Find one vehicle.' })
  @ApiResponse({
    status: 200,
    description: 'Find one vehicle.',
    type: VehicleRequestSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for find one vehicles.',
    type: VehicleUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any vehicle with passed ID.',
    type: VehicleNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: number) {
    return this.vehicleService.findOne(id);
  }

  /**
   * Update one vehicle.
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Update one vehicle.' })
  @ApiResponse({
    status: 200,
    description: 'Update one vehicle.',
    type: VehicleRequestSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Update one vehicle bad request.',
    type: VehicleBadRequestSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for update one vehicle.',
    type: VehicleUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any vehicle with passed ID.',
    type: VehicleNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  update(@Param('id') id: number, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update(id, updateVehicleDto);
  }

  /**
   * Delete one vehicle.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Delete one vehicle.' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for delete one vehicle.',
    type: VehicleUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any vehicle with passed ID.',
    type: VehicleNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  remove(@Param('id') id: number) {
    return this.vehicleService.remove(id);
  }
}
