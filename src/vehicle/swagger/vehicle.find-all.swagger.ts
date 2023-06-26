import { ApiProperty } from '@nestjs/swagger';
import { Vehicle } from '@src/vehicle/entities/vehicle.entity';

export class VehicleFindAllSwagger {
  @ApiProperty({
    type: Vehicle,
    isArray: true,
  })
  items: Vehicle[];
}
