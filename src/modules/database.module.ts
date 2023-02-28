import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from '@/vehicles/entities/vehicle.entity';
import { Park } from '@/parks/entities/park.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'node',
      entities: [Park, Vehicle],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Park, Vehicle]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
