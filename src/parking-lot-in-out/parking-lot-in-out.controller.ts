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
import { ParkingLotInOutRequestSwagger } from '@src/parking-lot-in-out/swagger/parking-lot-in-out.request.swagger';
import { ParkingLotInOutFindAllSwagger } from '@src/parking-lot-in-out/swagger/parking-lot-in-out.find-all.swagger';
import { ParkingLotInOutBadRequestSwagger } from '@src/parking-lot-in-out/swagger/parking-lot-in-out.bad-request.swagger';
import { ParkingLotInOutUnauthorizedSwagger } from '@src/parking-lot-in-out/swagger/parking-lot-in-out.unauthorized.swagger';
import { ParkingLotInOutNotFoundSwagger } from '@src/parking-lot-in-out/swagger/parking-lot-in-out.not-found.swagger';
import { AuthGuard } from '@src/auth/auth.guard';
import { ParkingLotInOutService } from '@src/parking-lot-in-out/parking-lot-in-out.service';
import { CreateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/create-parking-lot-in-out.dto';
import { UpdateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/update-parking-lot-in-out.dto';

@Controller('parking-lot-in-out')
@ApiTags('Parking Lot In Out')
export class ParkingLotInOutController {
  /**
   * Inject service dependency.
   */
  constructor(
    private readonly parkingLotInOutService: ParkingLotInOutService,
  ) {}

  /**
   * Create a new parking lot entrance or entrance/exit.
   */
  @Post()
  @ApiOperation({
    summary: 'Create a new parking lot entrance or entrance/exit.',
  })
  @ApiResponse({
    status: 201,
    description: 'Create a new parking lot.',
    type: ParkingLotInOutRequestSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Create a new parking lot bad request.',
    type: ParkingLotInOutBadRequestSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for create a new parking lot.',
    type: ParkingLotInOutUnauthorizedSwagger,
  })
  @UseGuards(AuthGuard)
  create(@Body() createParkingLotInOutDto: CreateParkingLotInOutDto) {
    return this.parkingLotInOutService.create(createParkingLotInOutDto);
  }

  /**
   * Find all parking lots entrances and exits.
   */
  @Get()
  @ApiOperation({ summary: 'Find all parking lots entrances and exits.' })
  @ApiResponse({
    status: 200,
    description: 'Find all parking lots.',
    type: ParkingLotInOutFindAllSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for find all parking lots.',
    type: ParkingLotInOutUnauthorizedSwagger,
  })
  @UseGuards(AuthGuard)
  findAll() {
    return this.parkingLotInOutService.findAll();
  }

  /**
   * Find one parking lot entrances and exit.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Find one parking lot entrances and exit.' })
  @ApiResponse({
    status: 200,
    description: 'Find one parking lot.',
    type: ParkingLotInOutRequestSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for find a parking lot.',
    type: ParkingLotInOutUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any parking lot with passed ID.',
    type: ParkingLotInOutNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: number) {
    return this.parkingLotInOutService.findOne(id);
  }

  /**
   * Update one parking lot entrance or entrance/exit.
   */
  @Patch(':id')
  @ApiOperation({
    summary: 'Update one parking lot entrance or entrance/exit.',
  })
  @ApiResponse({
    status: 200,
    description: 'Update one parking lot.',
    type: ParkingLotInOutRequestSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Update one parking lot bad request.',
    type: ParkingLotInOutBadRequestSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for update one parking lot.',
    type: ParkingLotInOutUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any parking lot with passed ID.',
    type: ParkingLotInOutNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: number,
    @Body() updateParkingLotInOutDto: UpdateParkingLotInOutDto,
  ) {
    return this.parkingLotInOutService.update(id, updateParkingLotInOutDto);
  }

  /**
   * Delete one parking lot entrance or entrance/exit.
   */
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one parking lot entrance or entrance/exit.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for delete one parking lot.',
    type: ParkingLotInOutUnauthorizedSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found any parking lot with passed ID.',
    type: ParkingLotInOutNotFoundSwagger,
  })
  @UseGuards(AuthGuard)
  remove(@Param('id') id: number) {
    return this.parkingLotInOutService.remove(id);
  }
}
