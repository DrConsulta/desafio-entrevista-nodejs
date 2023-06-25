import { IsOptional, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/create-parking-lot-in-out.dto';

export class UpdateParkingLotInOutDto extends PartialType(
  CreateParkingLotInOutDto,
) {
  @ApiProperty({
    description: 'Identification of Parking Lot Entrance/Exit',
    default: 1,
  })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({
    description: 'Identification of Parking Lot',
    default: 1,
  })
  @IsOptional()
  @IsInt()
  parkingLotId: number;

  @ApiProperty({
    description: 'Identification of Vehicle',
    default: 1,
  })
  @IsOptional()
  @IsInt()
  vehicleId: number;

  @ApiProperty({
    description: 'Vehicle entrance date',
    default: new Date(),
  })
  @IsOptional()
  @IsString()
  vehicleIn: string;

  @ApiProperty({
    description: 'Vehicle exit date',
    default: undefined,
  })
  @IsOptional()
  @IsString()
  vehicleOut?: string;
}
