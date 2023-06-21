import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from '@src/vehicle/entities/vehicle.entity';
import { ParkingLot } from '@src/parking-lot/entities/parking-lot.entity';
import { ParkingLotInOut } from '@src/parking-lot-in-out/entities/parking-lot-in-out.entity';
import { ParkingLotInOutService } from '@src/parking-lot-in-out/parking-lot-in-out.service';
import { ParkingLotInOutController } from '@src/parking-lot-in-out/parking-lot-in-out.controller';

@Module({
  controllers: [ParkingLotInOutController],
  providers: [ParkingLotInOutService],
  imports: [TypeOrmModule.forFeature([Vehicle, ParkingLot, ParkingLotInOut])],
})
export class ParkingLotInOutModule {}
