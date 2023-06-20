import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from '@src/vehicle/entities/vehicle.entity';
import { VehicleService } from '@src/vehicle/vehicle.service';
import { VehicleController } from '@src/vehicle/vehicle.controller';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
  imports: [TypeOrmModule.forFeature([Vehicle])],
})
export class VehicleModule {}
