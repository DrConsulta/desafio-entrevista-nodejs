import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ParkingLotInOutController } from '@src/parking-lot-in-out/parking-lot-in-out.controller';
import { ParkingLotInOutService } from '@src/parking-lot-in-out/parking-lot-in-out.service';
import { ParkingLotInOut } from '@src/parking-lot-in-out/entities/parking-lot-in-out.entity';
import { CreateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/create-parking-lot-in-out.dto';
import { UpdateParkingLotInOutDto } from '@src/parking-lot-in-out/dto/update-parking-lot-in-out.dto';

describe('ParkingLotInOutController', () => {
  let controller: ParkingLotInOutController;
  let service: ParkingLotInOutService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };
  const mockJwtService = {
    signAsync: jest.fn(),
  };

  const parkLotsInOut: ParkingLotInOut[] = [
    {
      id: 1,
      parkingLotId: 1,
      vehicleId: 1,
      vehicleIn: '2023-06-21 00:00:00',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      parkingLotId: 1,
      vehicleId: 2,
      vehicleIn: '2023-06-21 00:00:00',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const newParkLotInOut: ParkingLotInOut = new ParkingLotInOut({
    parkingLotId: 1,
    vehicleId: 1,
    vehicleIn: '2023-06-21 00:00:00',
  });

  const updatedParkingLotInOut = new ParkingLotInOut({
    parkingLotId: 1,
    vehicleId: 1,
    vehicleIn: '2023-06-21 00:00:00',
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingLotInOutController],
      providers: [
        {
          provide: ParkingLotInOutService,
          useValue: mockService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    mockService.create.mockReset();
    mockService.findAll.mockReset();
    mockService.findOne.mockReset();
    mockService.update.mockReset();
    mockService.remove.mockReset();

    controller = module.get<ParkingLotInOutController>(
      ParkingLotInOutController,
    );
    service = module.get<ParkingLotInOutService>(ParkingLotInOutService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('When try to create a new parking lot in out.', () => {
    it('should create a new parking lot in out.', async () => {
      const input: CreateParkingLotInOutDto = {
        parkingLotId: 1,
        vehicleId: 1,
        vehicleIn: '2023-06-21 00:00:00',
      };

      mockService.create.mockResolvedValue(newParkLotInOut);
      const response = await controller.create(input);

      expect(response).toEqual(newParkLotInOut);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(input);
    });
    it('should throw an exception when create a new parking lot in out.', () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());

      expect(service.create).rejects.toThrowError();
    });
  });

  describe('When try to list all parking lots in out.', () => {
    it('should return a list all parking lots in out.', async () => {
      mockService.findAll.mockResolvedValue(parkLotsInOut);
      const response = await controller.findAll();

      expect(response).toEqual(parkLotsInOut);
      expect(typeof response).toEqual('object');
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
    it('should thow an exception when list all parking lot in out.', () => {
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());

      expect(service.findAll).rejects.toThrowError();
    });
  });

  describe('When try to list one parking lots in out.', () => {
    it('should list one parking lots in out.', async () => {
      mockService.findOne.mockResolvedValue(parkLotsInOut[0]);
      const response = await controller.findOne(1);

      expect(response).toEqual(parkLotsInOut[0]);
      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
    it('should throw an exception when list one parking lot in out.', async () => {
      jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error());

      expect(controller.findOne(1)).rejects.toThrowError();
    });
  });

  describe('When try to update parking lot in out data.', () => {
    it('should update a one parking lot in out data.', async () => {
      const input: UpdateParkingLotInOutDto = {
        parkingLotId: 1,
        vehicleId: 2,
        vehicleIn: '2023-06-21 00:00:00',
        vehicleOut: '2023-06-21 02:00:00',
      };
      mockService.update.mockResolvedValue(updatedParkingLotInOut);
      const result = await controller.update(1, input);

      expect(result).toMatchObject({
        vehicleOut: updatedParkingLotInOut.vehicleOut,
      });
      expect(service.update).toBeCalledTimes(1);
      expect(service.update).toBeCalledWith(1, input);
    });
    it('should throw an exception when update one vehicle.', () => {
      jest.spyOn(service, 'update').mockRejectedValueOnce(new Error());

      expect(service.update).rejects.toThrowError();
    });
  });

  describe('When try to delete parking lot in out.', () => {
    it('should delete parking lot in out.', async () => {
      mockService.remove.mockResolvedValue(undefined);
      const result = await controller.remove(1);

      expect(result).toBeUndefined();
    });
  });
});
