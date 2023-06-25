import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from '@src/config/orm/sqlite.config';
import { HealthCheckModule } from '@src/health-check/health-check.module';
import { ParkingLotModule } from '@src/parking-lot/parking-lot.module';
import { VehicleModule } from '@src/vehicle/vehicle.module';
import { ParkingLotInOutModule } from '@src/parking-lot-in-out/parking-lot-in-out.module';
import { AuthModule } from '@src/auth/auth.module';
import { UserModule } from '@src/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormConfig),
    HealthCheckModule,
    ParkingLotModule,
    VehicleModule,
    ParkingLotInOutModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
