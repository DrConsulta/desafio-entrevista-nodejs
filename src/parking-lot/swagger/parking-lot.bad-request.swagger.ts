import { ApiProperty } from '@nestjs/swagger';

export class ParkingLotBadRequestSwagger {
  @ApiProperty({
    default: 400,
  })
  statusCode: number;

  @ApiProperty({
    default: [
      'name must be a string',
      'name should not be empty',
      'document must be a string',
      'document should not be empty',
      'address must be a string',
      'address should not be empty',
      'phone must be a string',
      'phone should not be empty',
      'motorcycleCapacity must be an integer number',
      'motorcycleCapacity should not be empty',
      'carCapacity must be an integer number',
      'carCapacity should not be empty',
    ],
    isArray: true,
  })
  message: string[];

  @ApiProperty({
    default: 'Bad Request',
  })
  error: string;
}
