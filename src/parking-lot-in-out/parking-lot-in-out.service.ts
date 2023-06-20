import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLotInOut } from '@src/parking-lot-in-out/entities/parking-lot-in-out.entity';
import { CreateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/create-parking-lot-in-out.dto';
import { UpdateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/update-parking-lot-in-out.dto';

@Injectable()
export class ParkingLotInOutService {
  /**
   * Inject repository dependency.
   */
  constructor(
    @InjectRepository(ParkingLotInOut)
    private parkingLotInOutRepository: Repository<ParkingLotInOut>,
  ) {}

  /**
   * Create a new parking lot entrance/exit.
   */
  async create(input: CreateParkingLotInOutDto): Promise<ParkingLotInOut> {
    const parkingLotIn = this.parkingLotInOutRepository.create(input);
    const newParkingLotIn = await this.parkingLotInOutRepository.save(
      parkingLotIn,
    );

    if (!newParkingLotIn) {
      throw new InternalServerErrorException(
        'Problem to create a parking lot in out. Try again!',
      );
    }

    return newParkingLotIn;
  }

  /**
   * Find all parking lots.
   */
  async findAll(): Promise<ParkingLotInOut[]> {
    const parkingLotEntrances = await this.parkingLotInOutRepository.find();

    return parkingLotEntrances;
  }

  /**
   * Find one parking lot entrance.
   */
  async findOne(id: number): Promise<ParkingLotInOut> {
    const parkingLotEntrance = await this.parkingLotInOutRepository.findOneBy({
      id: id,
    });

    if (!parkingLotEntrance) {
      throw new NotFoundException('Parking not found!');
    }

    return parkingLotEntrance;
  }

  /**
   * Update one parking lot entrance.
   */
  async update(
    id: number,
    input: UpdateParkingLotInOutDto,
  ): Promise<ParkingLotInOut> {
    const parkingLotEntrance = await this.findOne(id);
    await this.parkingLotInOutRepository.update(parkingLotEntrance, {
      ...input,
    });
    const updatedParkingLotEntrance = this.parkingLotInOutRepository.create({
      ...parkingLotEntrance,
      ...input,
    });

    return updatedParkingLotEntrance;
  }

  /**
   * Delete one parking lot.
   */
  async remove(id: number): Promise<boolean> {
    const parkingLotEntrance = await this.findOne(id);
    const deletedParkingLotEntrance =
      await this.parkingLotInOutRepository.softDelete(parkingLotEntrance);

    if (deletedParkingLotEntrance) {
      return true;
    }

    return false;
  }
}
