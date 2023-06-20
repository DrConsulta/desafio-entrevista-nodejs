import { ParkingLotInOut } from '@src/parking-lot-in-out/entities/parking-lot-in-out.entity';
import { CreateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/create-parking-lot-in-out.dto';

export class ParkingLotInOutTestMocks {
  static getValidParkingLotInOut(): ParkingLotInOut {
    const parkingLotInOut = new ParkingLotInOut();
    parkingLotInOut.id = 1;
    parkingLotInOut.parkingLotId = 1;
    parkingLotInOut.vehicleId = 1;
    parkingLotInOut.vehicleIn = new Date();

    return parkingLotInOut;
  }

  static getValidParkingLotInOutDto(): CreateParkingLotInOutDto {
    const parkingLotInOut = new CreateParkingLotInOutDto();
    parkingLotInOut.parkingLotId = 1;
    parkingLotInOut.vehicleId = 1;
    parkingLotInOut.vehicleIn = new Date();

    return parkingLotInOut;
  }
}
