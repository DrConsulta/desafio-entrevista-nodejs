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
import { ParkingLotInOutService } from '@src/parking-lot-in-out/parking-lot-in-out.service';
import { CreateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/create-parking-lot-in-out.dto';
import { UpdateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/update-parking-lot-in-out.dto';

@Controller('parking-lot-in-out')
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
  @ApiParam({
    name: 'vehicleOut',
    required: false,
    description: 'ParkingLot Vehicle exit',
    type: 'date',
    example: '2023-03-20 00:00:00',
  })
  @ApiParam({
    name: 'vehicleIn',
    required: false,
    description: 'ParkingLot Vehicle entrance',
    type: 'date',
    example: '2023-03-20 02:00:00',
  })
  @ApiParam({
    name: 'vehicleId',
    required: true,
    description: 'Vehicle Identification',
    type: 'integer',
    example: 1,
  })
  @ApiParam({
    name: 'parkingLotId',
    required: true,
    description: 'Parking Lot Identification',
    type: 'integer',
    example: 1,
  })
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createParkingLotInOutDto: CreateParkingLotInOutDto) {
    return this.parkingLotInOutService.create(createParkingLotInOutDto);
  }

  /**
   * Find all parking lots entrances and exits.
   */
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.parkingLotInOutService.findAll();
  }

  /**
   * Find one parking lot entrances and exit.
   */
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Parking Lot entrance/exit to be finded',
    type: 'integer',
    example: 1,
  })
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.parkingLotInOutService.findOne(id);
  }

  /**
   * Update one parking lot entrance or entrance/exit.
   */
  @ApiParam({
    name: 'vehicleOut',
    required: false,
    description: 'ParkingLot Vehicle exit',
    type: 'date',
    example: '2023-03-20 00:00:00',
  })
  @ApiParam({
    name: 'vehicleIn',
    required: false,
    description: 'ParkingLot Vehicle entrance',
    type: 'date',
    example: '2023-03-20 02:00:00',
  })
  @ApiParam({
    name: 'vehicleId',
    required: true,
    description: 'Vehicle Identification',
    type: 'integer',
    example: 1,
  })
  @ApiParam({
    name: 'parkingLotId',
    required: true,
    description: 'Parking Lot Identification',
    type: 'integer',
    example: 1,
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Parking Lot entrance/exit to be updated',
    type: 'integer',
    example: 1,
  })
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateParkingLotInOutDto: UpdateParkingLotInOutDto,
  ) {
    return this.parkingLotInOutService.update(id, updateParkingLotInOutDto);
  }

  /**
   * Delete one parking lot entrance or entrance/exit.
   */
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identification of Parking Lot entrance/exit to be deleted',
    type: 'integer',
    example: 1,
  })
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.parkingLotInOutService.remove(id);
  }
}
