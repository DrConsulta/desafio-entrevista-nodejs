import { ApiProperty } from '@nestjs/swagger';
import { ParkingLotInOut } from '@src/parking-lot-in-out/entities/parking-lot-in-out.entity';

export class ParkingLotInOutFindAllSwagger {
  @ApiProperty({
    type: ParkingLotInOut,
    isArray: true,
  })
  items: ParkingLotInOut[];
}
