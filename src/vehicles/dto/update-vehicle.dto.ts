import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';
import { VehicleType } from '@/lib/enum/type';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The brand of a vehicle',
    default: '',
  })
  public brand: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The model of a vehicle',
    default: '',
  })
  public model: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The color of a vehicle',
    default: '',
  })
  public color: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The plate of a vehicle',
    default: '',
  })
  public plate: string;

  @IsEnum(VehicleType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The type of a vehicle',
    default: '',
  })
  public type: VehicleType;
}
