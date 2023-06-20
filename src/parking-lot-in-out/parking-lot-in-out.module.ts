import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingLotInOut } from '@src/parking-lot-in-out/entities/parking-lot-in-out.entity';
import { ParkingLotInOutService } from '@src/parking-lot-in-out/parking-lot-in-out.service';
import { ParkingLotInOutController } from '@src/parking-lot-in-out/parking-lot-in-out.controller';

@Module({
  controllers: [ParkingLotInOutController],
  providers: [ParkingLotInOutService],
  imports: [TypeOrmModule.forFeature([ParkingLotInOut])],
})
export class ParkingLotInOutModule {}
