import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingLot } from '@src/parking-lot/entities/parking-lot.entity';
import { ParkingLotService } from '@src/parking-lot/parking-lot.service';
import { ParkingLotController } from '@src/parking-lot/parking-lot.controller';

@Module({
  controllers: [ParkingLotController],
  providers: [ParkingLotService],
  imports: [TypeOrmModule.forFeature([ParkingLot])],
})
export class ParkingLotModule {}
