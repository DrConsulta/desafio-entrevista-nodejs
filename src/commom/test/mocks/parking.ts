import { ParkingLot } from '@src/parking-lot/entities/parking-lot.entity';
import { CreateParkingLotDto } from '@src/parking-lot/dto/create-parking-lot.dto';

export class ParkingTestMocks {
  static getValidParking(): ParkingLot {
    const parkingLot = new ParkingLot();
    parkingLot.id = 1;
    parkingLot.name = 'Park Lot #01';
    parkingLot.document = '00.000.000/0000-00';
    parkingLot.address = 'Rua das Casas, 42, Centro - Rio de Janeiro';
    parkingLot.phone = '2190009090';
    parkingLot.motorcycleCapacity = 10;
    parkingLot.carCapacity = 20;

    return parkingLot;
  }

  static getValidParkingDto(): CreateParkingLotDto {
    const parkingLot = new CreateParkingLotDto();
    parkingLot.name = 'Park Lot #01';
    parkingLot.document = '00.000.000/0000-00';
    parkingLot.address = 'Rua das Casas, 42, Centro - Rio de Janeiro';
    parkingLot.phone = '1190009090';
    parkingLot.motorcycleCapacity = 10;
    parkingLot.carCapacity = 20;

    return parkingLot;
  }
}
