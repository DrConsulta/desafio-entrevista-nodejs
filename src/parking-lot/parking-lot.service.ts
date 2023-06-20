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
    private parkingRepository: Repository<ParkingLot>,
  ) {}

  /**
   * Create a new parking lot.
   */
  async create(input: CreateParkingLotDto): Promise<ParkingLot> {
    const parking = this.parkingRepository.create(input);
    const newParking = await this.parkingRepository.save(parking);

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
    const parkings = await this.parkingRepository.find();

    return parkings;
  }

  /**
   * Find one parking lot.
   */
  async findOne(id: number): Promise<ParkingLot> {
    const parking = await this.parkingRepository.findOneBy({ id: id });

    if (!parking) {
      throw new NotFoundException('Parking not found!');
    }

    return parking;
  }

  /**
   * Update one parking lot.
   */
  async update(id: number, input: UpdateParkingLotDto): Promise<ParkingLot> {
    const parking = await this.findOne(id);
    await this.parkingRepository.update(parking, { ...input });
    const updatedParking = this.parkingRepository.create({
      ...parking,
      ...input,
    });

    return updatedParking;
  }

  /**
   * Delete one parking lot.
   */
  async remove(id: number): Promise<boolean> {
    const parking = await this.findOne(id);
    const deletedParking = await this.parkingRepository.softDelete(parking);

    if (deletedParking) {
      return true;
    }

    return false;
  }
}
