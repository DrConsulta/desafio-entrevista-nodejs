import { ApiProperty } from '@nestjs/swagger';

export class VehicleNotFoundSwagger {
  @ApiProperty({
    default: 404,
  })
  statusCode: number;

  @ApiProperty({
    default: 'Vehicle not found!',
  })
  message: string;

  @ApiProperty({
    default: 'Not Found',
  })
  error: string;
}
