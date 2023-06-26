import { ApiProperty } from '@nestjs/swagger';

export class ParkingLotInOutBadRequestSwagger {
  @ApiProperty({
    default: 400,
  })
  statusCode: number;

  @ApiProperty({
    default: [
      'parkingLotId must be an integer number',
      'parkingLotId should not be empty',
      'vehicleId must be an integer number',
      'vehicleId should not be empty',
      'vehicleIn must be a string',
      'vehicleIn should not be empty',
    ],
    isArray: true,
  })
  message: string[];

  @ApiProperty({
    default: 'Bad Request',
  })
  error: string;
}
