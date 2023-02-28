import { Module } from '@nestjs/common';
import { ParksService } from './parks.service';
import { ParksController } from './parks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Park } from './entities/park.entity';

@Module({
  controllers: [ParksController],
  providers: [ParksService],
  imports: [TypeOrmModule.forFeature([Park])],
})
export class ParksModule {}
