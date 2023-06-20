import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from '@src/config/orm/mysql.config';
import { HealthCheckModule } from '@src/health-check/health-check.module';
import { ParkingLotModule } from '@src/parking-lot/parking-lot.module';
import { VehicleModule } from '@src/vehicle/vehicle.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormConfig),
    HealthCheckModule,
    ParkingLotModule,
    VehicleModule,
  ],
})
export class AppModule {}
