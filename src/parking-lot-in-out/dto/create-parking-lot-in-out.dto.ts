import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateParkingLotInOutDto {
  @ApiProperty({
    description: 'Identification of Parking Lot',
    default: 1,
  })
  @IsNotEmpty()
  @IsInt()
  parkingLotId: number;

  @ApiProperty({
    description: 'Identification of Vehicle',
    default: 1,
  })
  @IsNotEmpty()
  @IsInt()
  vehicleId: number;

  @ApiProperty({
    description: 'Vehicle entrance date',
    default: new Date(),
  })
  @IsNotEmpty()
  @IsString()
  vehicleIn: string;

  @ApiProperty({
    description: 'Vehicle exit string',
    default: undefined,
  })
  @IsOptional()
  @IsString()
  vehicleOut?: string;
}
