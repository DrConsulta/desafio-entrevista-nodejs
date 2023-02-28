import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@/modules/database.module';
import { ParksModule } from './parks/parks.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [ParksModule, VehiclesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
