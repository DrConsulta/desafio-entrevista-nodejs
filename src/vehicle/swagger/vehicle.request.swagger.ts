import { ApiProperty } from '@nestjs/swagger';
import { Vehicle } from '@src/vehicle/entities/vehicle.entity';

export enum vehicleType {
  MOTORCYCLE = 'Motorcycle',
  CAR = 'Car',
}

export class VehicleRequestSwagger extends Vehicle {
  @ApiProperty()
  id: number;

  @ApiProperty({
    default: 'Honda',
  })
  brand: string;

  @ApiProperty({
    default: 'Civic',
  })
  model: string;

  @ApiProperty({
    default: 'Black',
  })
  collor: string;

  @ApiProperty({
    default: 'AAA 1234',
  })
  licensePlate: string;

  @ApiProperty({
    default: vehicleType.CAR,
  })
  type: vehicleType;

  @ApiProperty({
    default: '2023-06-26T04:13:24.997Z',
  })
  createdAt: Date;

  @ApiProperty({
    default: '2023-06-26T04:13:24.997Z',
  })
  updatedAt: Date;
}
