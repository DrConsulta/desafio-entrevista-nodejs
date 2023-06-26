import { ApiProperty } from '@nestjs/swagger';

export class VehicleBadRequestSwagger {
  @ApiProperty({
    default: 400,
  })
  statusCode: number;

  @ApiProperty({
    default: [
      'brand must be a string',
      'brand should not be empty',
      'model must be a string',
      'model should not be empty',
      'collor must be a string',
      'collor should not be empty',
      'licensePlate must be a string',
      'licensePlate should not be empty',
      'type must be a string',
      'type should not be empty',
    ],
    isArray: true,
  })
  message: string[];

  @ApiProperty({
    default: 'Bad Request',
  })
  error: string;
}
