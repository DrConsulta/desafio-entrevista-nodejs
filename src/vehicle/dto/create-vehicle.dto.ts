import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVehicleDto {
  @ApiProperty({
    description: 'Brand of Vehicle',
    default: 'Honda',
  })
  @IsNotEmpty()
  @IsString()
  brand: string;

  @ApiProperty({
    description: 'Model of Vehicle',
    default: 'Civic',
  })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({
    description: 'Collor of Vehicle',
    default: 'Black',
  })
  @IsNotEmpty()
  @IsString()
  collor: string;

  @ApiProperty({
    description: 'License plate of Vehicle',
    default: 'AAA 0000',
  })
  @IsNotEmpty()
  @IsString()
  licensePlate: string;

  @ApiProperty({
    description: 'Type of Vehicle (car/Motorcycle)',
    default: 'Car',
  })
  @IsNotEmpty()
  @IsString()
  type: string;
}
