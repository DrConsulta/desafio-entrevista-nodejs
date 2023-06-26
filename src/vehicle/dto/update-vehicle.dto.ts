import { IsOptional, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateVehicleDto } from '@src/vehicle/dto/create-vehicle.dto';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
  @ApiProperty({
    description: 'Identification of Vehicle',
    default: 1,
  })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({
    description: 'Brand of Vehicle',
    default: 'Honda',
  })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiProperty({
    description: 'Model of Vehicle',
    default: 'Civic',
  })
  @IsOptional()
  @IsString()
  model?: string;

  @ApiProperty({
    description: 'Collor of Vehicle',
    default: 'Black',
  })
  @IsOptional()
  @IsString()
  collor?: string;

  @ApiProperty({
    description: 'License plate of Vehicle',
    default: 'AAA 0000',
  })
  @IsOptional()
  @IsString()
  licensePlate?: string;

  @ApiProperty({
    description: 'Type of Vehicle (car/Motorcycle)',
    default: 'Car',
  })
  @IsOptional()
  @IsString()
  type?: string;
}
