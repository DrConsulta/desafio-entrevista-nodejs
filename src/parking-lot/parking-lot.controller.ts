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
import { ParkingLotRequestSwagger } from '@src/parking-lot/swagger/parking-lot.request.swagger';
import { ParkingLotFindAllSwagger } from '@src/parking-lot/swagger/parking-lot.find-all.swagger';
import { ParkingLotBadRequestSwagger } from '@src/parking-lot/swagger/parking-lot.bad-request.swagger';
import { ParkingLotUnauthorizedSwagger } from '@src/parking-lot/swagger/parking-lot.unauthorized.swagger';
import { ParkingLotNotFoundSwagger } from '@src/parking-lot/swagger/parking-lot.not-found.swagger';
import { AuthGuard } from '@src/auth/auth.guard';
import { ParkingLotService } from '@src/parking-lot/parking-lot.service';
import { CreateParkingLotDto } from '@src/parking-lot/dto/create-parking-lot.dto';
import { UpdateParkingLotDto } from '@src/parking-lot/dto/update-parking-lot.dto';

@Controller('parking-lot')
@ApiTags('Parking Lot')
export class ParkingLotController {
  /**
   * Inject service dependency.
   */
  constructor(private readonly parkingLotService: ParkingLotService) {}

  /**
   * Create a new parking lot.
   */
  @Post()
  @ApiOperation({ summary: 'Create a new parking lot.' })
  @ApiResponse({
    status: 201,
    description: 'Create a new parking lot.',
    type: ParkingLotRequestSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Create a new parking lot bad request.',
    type: ParkingLotBadRequestSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for create a new parking lot.',
    type: ParkingLotUnauthorizedSwagger,
  })
  @UseGuards(AuthGuard)
  create(@Body() createParkingLotDto: CreateParkingLotDto) {
    return this.parkingLotService.create(createParkingLotDto);
  }

  /**
   * Find all parking lots.
   */
  @Get()
  @ApiOperation({ summary: 'Find all parking lots.' })
  @ApiResponse({
    status: 200,
    description: 'Find all parking lots.',
    type: ParkingLotFindAllSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for find all parking lots.',
    type: ParkingLotUnauthorizedSwagger,
  })
  @UseGuards(AuthGuard)
  findAll() {
    return this.parkingLotService.findAll();
  }

  /**
   * Find one parking lot.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Find one parking lot.' })
  @ApiResponse({
    status: 200,
    description: 'Find one parking lot.',
    type: ParkingLotRequestSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for find a parking lot.',
    type: ParkingLotUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any parking lot with passed ID.',
    type: ParkingLotNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: number) {
    return this.parkingLotService.findOne(id);
  }

  /**
   * Update one parking lot.
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Update one parking lot.' })
  @ApiResponse({
    status: 200,
    description: 'Update one parking lot.',
    type: ParkingLotRequestSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Update one parking lot bad request.',
    type: ParkingLotBadRequestSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for update one parking lot.',
    type: ParkingLotUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any parking lot with passed ID.',
    type: ParkingLotNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: number,
    @Body() updateParkingLotDto: UpdateParkingLotDto,
  ) {
    return this.parkingLotService.update(id, updateParkingLotDto);
  }

  /**
   * Delete one parking lot.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Delete one parking lot.' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for delete one parking lot.',
    type: ParkingLotUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any parking lot with passed ID.',
    type: ParkingLotNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  remove(@Param('id') id: number) {
    return this.parkingLotService.remove(id);
  }
}
