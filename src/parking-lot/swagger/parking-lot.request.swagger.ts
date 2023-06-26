import { ApiProperty } from '@nestjs/swagger';
import { ParkingLot } from '@src/parking-lot/entities/parking-lot.entity';

export class ParkingLotRequestSwagger extends ParkingLot {
  @ApiProperty()
  id: number;

  @ApiProperty({
    default: 'China Town Parking',
  })
  name: string;

  @ApiProperty({
    default: '00.000.000/0000-00',
  })
  document: string;

  @ApiProperty({
    default: 'Rua das Casas, 42, Centro - Rio de Janeiro',
  })
  address: string;

  @ApiProperty({
    default: '(21) 5000-9999',
  })
  phone: string;

  @ApiProperty({
    default: 10,
  })
  motorcycleCapacity: number;

  @ApiProperty({
    default: 5,
  })
  carCapacity: number;

  @ApiProperty({
    default: '2023-06-26T04:13:24.997Z',
  })
  createdAt: Date;

  @ApiProperty({
    default: '2023-06-26T04:13:24.997Z',
  })
  updatedAt: Date;
}
