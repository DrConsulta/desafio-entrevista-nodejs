import { ApiProperty } from '@nestjs/swagger';

export class ParkingLotNotFoundSwagger {
  @ApiProperty({
    default: 404,
  })
  statusCode: number;

  @ApiProperty({
    default: 'Parking Lot not found!',
  })
  message: string;

  @ApiProperty({
    default: 'Not Found',
  })
  error: string;
}
