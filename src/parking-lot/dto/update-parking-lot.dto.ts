import { IsOptional, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingLotDto } from '@src/parking-lot/dto/create-parking-lot.dto';

export class UpdateParkingLotDto extends PartialType(CreateParkingLotDto) {
  @ApiProperty({
    description: 'Identification of Parking Lot',
    default: 1,
  })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({
    description: 'Name of Parking Lot',
    default: 'China Town Parking',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Document of Parking Lot',
    default: '00.000.000/0000-00',
  })
  @IsOptional()
  @IsString()
  document?: string;

  @ApiProperty({
    description: 'Address of Parking Lot',
    default: 'Rua das Casas, 42, Centro - Rio de Janeiro',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: 'Phone of Parking Lot',
    default: '2190009090',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Capacity of motorcycle into Parking Lot',
    default: 15,
  })
  @IsOptional()
  @IsInt()
  motorcycleCapacity?: number;

  @ApiProperty({
    description: 'Capacity of cars into Parking Lot',
    default: 20,
  })
  @IsOptional()
  @IsInt()
  carCapacity?: number;
}
