import { ApiProperty } from '@nestjs/swagger';
import { ParkingLot } from '@src/parking-lot/entities/parking-lot.entity';

export class ParkingLotFindAllSwagger {
  @ApiProperty({
    type: ParkingLot,
    isArray: true,
  })
  items: ParkingLot[];
}
