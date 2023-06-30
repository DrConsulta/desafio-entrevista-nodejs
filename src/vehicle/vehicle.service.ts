import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from '@src/vehicle/entities/vehicle.entity';
import { CreateVehicleDto } from '@src/vehicle/dto/create-vehicle.dto';
import { UpdateVehicleDto } from '@src/vehicle/dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  /**
   * Inject repository dependency.
   */
  constructor(
    @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>,
  ) {}

  /**
   * Create a new vehicle.
   */
  async create(input: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create(input);
    const newVehicle = await this.vehicleRepository.save(vehicle);

    if (!newVehicle) {
      throw new InternalServerErrorException(
        'Problem to create a vehicle. Try again!',
      );
    }

    return newVehicle;
  }

  /**
   * Find all vehicles.
   */
  async findAll(): Promise<Vehicle[]> {
    const vehicles = await this.vehicleRepository.find();

    return vehicles;
  }

  /**
   * Find one vehicle.
   */
  async findOne(id: number): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findOneBy({ id: id });

    if (!vehicle) {
      throw new NotFoundException('Vehicle not found!');
    }

    return vehicle;
  }

  /**
   * Update one vehicle.
   */
  async update(id: number, input: UpdateVehicleDto): Promise<Vehicle> {
    const vehicle = await this.findOne(id);
    await this.vehicleRepository.update(vehicle, { ...input });
    const updatedVehicleObject = this.vehicleRepository.create({
      ...vehicle,
      ...input,
    });
    const updatedVehicle = this.vehicleRepository.save({
      ...updatedVehicleObject,
      ...input,
    });

    return updatedVehicle;
  }

  /**
   * Delete one vehicle.
   */
  async remove(id: number): Promise<boolean> {
    const vehicle = await this.findOne(id);
    const deletedVehicle = await this.vehicleRepository.remove(vehicle);

    if (deletedVehicle) {
      return true;
    }

    return false;
  }
}
