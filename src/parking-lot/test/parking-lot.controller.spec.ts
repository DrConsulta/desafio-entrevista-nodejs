import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ParkingLotController } from '@src/parking-lot/parking-lot.controller';
import { ParkingLotService } from '@src/parking-lot/parking-lot.service';
import { ParkingLot } from '@src/parking-lot/entities/parking-lot.entity';
import { CreateParkingLotDto } from '@src/parking-lot/dto/create-parking-lot.dto';
import { UpdateParkingLotDto } from '@src/parking-lot/dto/update-parking-lot.dto';

describe('ParkingLotController', () => {
  let controller: ParkingLotController;
  let service: ParkingLotService;

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

  const parkingLots: ParkingLot[] = [
    {
      id: 1,
      name: 'Parking 1',
      document: '11.111.111/1111-11',
      address: 'Rua das Casas, SN, Bairro - Cidade',
      phone: '1190009090',
      motorcycleCapacity: 10,
      carCapacity: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Parking 2',
      document: '22.222.222/2222-22',
      address: 'Rua das Casas, SN, Bairro - Cidade',
      phone: '1190009090',
      motorcycleCapacity: 15,
      carCapacity: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const newParkingLot: ParkingLot = new ParkingLot({
    name: 'Parking 1',
    document: '11.111.111/1111-11',
    address: 'Rua das Casas, SN, Bairro - Cidade',
    phone: '1190009090',
    motorcycleCapacity: 10,
    carCapacity: 20,
  });

  const updatedParkingLot = new ParkingLot({
    motorcycleCapacity: 15,
    carCapacity: 25,
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingLotController],
      providers: [
        {
          provide: ParkingLotService,
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

    controller = module.get<ParkingLotController>(ParkingLotController);
    service = module.get<ParkingLotService>(ParkingLotService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('When try to create a new parking lot.', () => {
    it('should create a new parking lot.', async () => {
      const input: CreateParkingLotDto = {
        name: 'Parking 1',
        document: '11.111.111/1111-11',
        address: 'Rua das Casas, SN, Bairro - Cidade',
        phone: '1190009090',
        motorcycleCapacity: 10,
        carCapacity: 20,
      };

      mockService.create.mockResolvedValue(newParkingLot);
      const response = await controller.create(input);

      expect(response).toEqual(newParkingLot);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(input);
    });
    it('should throw an exception when create a new parking.', () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());

      expect(service.create).rejects.toThrowError();
    });
  });

  describe('When try to list all parking lots.', () => {
    it('should return a list all parking lots.', async () => {
      mockService.findAll.mockResolvedValue(parkingLots);
      const response = await controller.findAll();

      expect(response).toEqual(parkingLots);
      expect(typeof response).toEqual('object');
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
    it('should thow an exception when list all parking lots.', () => {
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());

      expect(service.findAll).rejects.toThrowError();
    });
  });

  describe('When try to list one parking lot.', () => {
    it('should list one parking lot.', async () => {
      mockService.findOne.mockResolvedValue(parkingLots[0]);
      const response = await controller.findOne(1);

      expect(response).toEqual(parkingLots[0]);
      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
    it('should throw an exception when list one parking.', async () => {
      jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error());

      expect(service.findOne(1)).rejects.toThrowError();
    });
  });

  describe('When try to update parking lot data.', () => {
    it('should update a one parking lot data.', async () => {
      const input: UpdateParkingLotDto = {
        motorcycleCapacity: 15,
        carCapacity: 25,
      };
      mockService.update.mockResolvedValue(updatedParkingLot);
      const result = await controller.update(1, input);

      expect(result).toMatchObject({
        motorcycleCapacity: updatedParkingLot.motorcycleCapacity,
        carCapacity: updatedParkingLot.carCapacity,
      });
      expect(service.update).toBeCalledTimes(1);
      expect(service.update).toBeCalledWith(1, input);
    });
    it('should throw an exception when update one parking.', () => {
      jest.spyOn(service, 'update').mockRejectedValueOnce(new Error());

      expect(service.update).rejects.toThrowError();
    });
  });

  describe('When try to delete parking lot.', () => {
    it('should delete parking lot.', async () => {
      mockService.remove.mockResolvedValue(undefined);
      const result = await controller.remove(1);

      expect(result).toBeUndefined();
    });
  });
});
