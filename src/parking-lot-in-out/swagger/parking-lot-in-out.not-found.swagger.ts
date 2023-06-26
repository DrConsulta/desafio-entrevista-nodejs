import { ApiProperty } from '@nestjs/swagger';

export class ParkingLotInOutNotFoundSwagger {
  @ApiProperty({
    default: 404,
  })
  statusCode: number;

  @ApiProperty({
    default: 'Parking Lot entrance or exit not found!',
  })
  message: string;

  @ApiProperty({
    default: 'Not Found',
  })
  error: string;
}
