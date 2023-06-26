import { Vehicle } from '@src/vehicle/entities/vehicle.entity';
import { CreateVehicleDto } from '@src/vehicle/dto/create-vehicle.dto';

export enum vehicleType {
  MOTORCYCLE = 'Motorcycle',
  CAR = 'Car',
}

export class VehicleTestMocks {
  static getValidVehicle(): Vehicle {
    const vehicle = new Vehicle();
    vehicle.id = 1;
    vehicle.brand = 'Honda';
    vehicle.model = 'CRV';
    vehicle.collor = 'Black';
    vehicle.licensePlate = 'AAA 0000';
    vehicle.type = vehicleType.CAR;

    return vehicle;
  }

  static getValidVehicleDto(): CreateVehicleDto {
    const vehicle = new CreateVehicleDto();
    vehicle.brand = 'Honda';
    vehicle.model = 'CRV';
    vehicle.collor = 'Black';
    vehicle.licensePlate = 'AAA 0000';
    vehicle.type = vehicleType.CAR;

    return vehicle;
  }
}
