import { ApiProperty } from '@nestjs/swagger';
import { ParkingLot } from '@src/parking-lot/entities/parking-lot.entity';

export class ParkingLotInOutRequestSwagger extends ParkingLot {
  @ApiProperty()
  id: number;

  @ApiProperty({
    default: 1,
  })
  parkingLotId: number;

  @ApiProperty({
    default: 1,
  })
  vehicleId: number;

  @ApiProperty({
    default: '2023-06-26 00:00:00',
  })
  vehicleIn: string;

  @ApiProperty({
    default: '2023-06-26 00:00:00',
  })
  vehicleOut: string;

  @ApiProperty({
    default: '2023-06-26T04:13:24.997Z',
  })
  createdAt: Date;

  @ApiProperty({
    default: '2023-06-26T04:13:24.997Z',
  })
  updatedAt: Date;
}
