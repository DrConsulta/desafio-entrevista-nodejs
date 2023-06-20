import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLot } from '@src/parking-lot/entities/parking-lot.entity';
import { CreateParkingLotDto } from '@src/parking-lot/dto/create-parking-lot.dto';
import { UpdateParkingLotDto } from '@src/parking-lot/dto/update-parking-lot.dto';

@Injectable()
export class ParkingLotService {
  /**
   * Inject repository dependency.
   */
  constructor(
    @InjectRepository(ParkingLot)
    private parkingLotRepository: Repository<ParkingLot>,
  ) {}

  /**
   * Create a new parking lot.
   */
  async create(input: CreateParkingLotDto): Promise<ParkingLot> {
    const parking = this.parkingLotRepository.create(input);
    const newParking = await this.parkingLotRepository.save(parking);

    if (!newParking) {
      throw new InternalServerErrorException(
        'Problem to create a parking. Try again!',
      );
    }

    return newParking;
  }

  /**
   * Find all parking lots.
   */
  async findAll(): Promise<ParkingLot[]> {
    const parkingLots = await this.parkingLotRepository.find();

    return parkingLots;
  }

  /**
   * Find one parking lot.
   */
  async findOne(id: number): Promise<ParkingLot> {
    const parkingLot = await this.parkingLotRepository.findOneBy({ id: id });

    if (!parkingLot) {
      throw new NotFoundException('Parking not found!');
    }

    return parkingLot;
  }

  /**
   * Update one parking lot.
   */
  async update(id: number, input: UpdateParkingLotDto): Promise<ParkingLot> {
    const parkingLot = await this.findOne(id);
    await this.parkingLotRepository.update(parkingLot, { ...input });
    const updatedParkingLot = this.parkingLotRepository.create({
      ...parkingLot,
      ...input,
    });

    return updatedParkingLot;
  }

  /**
   * Delete one parking lot.
   */
  async remove(id: number): Promise<boolean> {
    const parkingLot = await this.findOne(id);
    const deletedParkingLot = await this.parkingLotRepository.softDelete(parkingLot);

    if (deletedParkingLot) {
      return true;
    }

    return false;
  }
}
