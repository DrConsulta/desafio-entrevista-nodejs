import { IsNotEmpty, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateParkingLotDto {
  @ApiProperty({
    description: 'Name of Parking Lot',
    default: 'Parking Lot #01',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Document of Parking Lot',
    default: '00.000.000/0000-00',
  })
  @IsNotEmpty()
  @IsString()
  document: string;

  @ApiProperty({
    description: 'Address of Parking Lot',
    default: 'Rua das Casas, 42, Centro - Rio de Janeiro',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    description: 'Phone of Parking Lot',
    default: '2190009090',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Capacity of motorcycle into Parking Lot',
    default: 15,
  })
  @IsNotEmpty()
  @IsInt()
  motorcycleCapacity: number;

  @ApiProperty({
    description: 'Capacity of cars into Parking Lot',
    default: 20,
  })
  @IsNotEmpty()
  @IsInt()
  carCapacity: number;
}
