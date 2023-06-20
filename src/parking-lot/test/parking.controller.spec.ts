import { Test, TestingModule } from '@nestjs/testing';
import { ParkingController } from '@src/parking-lot/parking-lot.controller';
import { ParkingService } from '@src/parking-lot/parking.service';
import { Parking } from '@src/parking-lot/entities/parking.entity';
import { CreateParkingDto } from '@src/parking-lot/dto/create-parking.dto';
import { UpdateParkingDto } from '@src/parking-lot/dto/update-parking.dto';

describe('ParkingController', () => {
  let controller: ParkingController;
  let service: ParkingService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  const parkings: Parking[] = [
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

  const newParking: Parking = new Parking({
    name: 'Parking 1',
    document: '11.111.111/1111-11',
    address: 'Rua das Casas, SN, Bairro - Cidade',
    phone: '1190009090',
    motorcycleCapacity: 10,
    carCapacity: 20,
  });

  const updatedParking = new Parking({
    motorcycleCapacity: 15,
    carCapacity: 25,
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingController],
      providers: [
        {
          provide: ParkingService,
          useValue: mockService,
        },
      ],
    }).compile();

    mockService.create.mockReset();
    mockService.findAll.mockReset();
    mockService.findOne.mockReset();
    mockService.update.mockReset();
    mockService.remove.mockReset();

    controller = module.get<ParkingController>(ParkingController);
    service = module.get<ParkingService>(ParkingService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('When try to create a new parking.', () => {
    it('should create a new parking.', async () => {
      const input: CreateParkingDto = {
        name: 'Parking 1',
        document: '11.111.111/1111-11',
        address: 'Rua das Casas, SN, Bairro - Cidade',
        phone: '1190009090',
        motorcycleCapacity: 10,
        carCapacity: 20,
      };

      mockService.create.mockResolvedValue(newParking);
      const response = await controller.create(input);

      expect(response).toEqual(newParking);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(input);
    });
    it('should throw an exception when create a new parking.', () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());

      expect(service.create).rejects.toThrowError();
    });
  });

  describe('When try to list all parkings.', () => {
    it('should return a list all parkings.', async () => {
      mockService.findAll.mockResolvedValue(parkings);
      const response = await controller.findAll();

      expect(response).toEqual(parkings);
      expect(typeof response).toEqual('object');
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
    it('should thow an exception when list all parkings.', () => {
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());

      expect(controller.findAll).rejects.toThrowError();
    });
  });

  describe('When try to list one parking.', () => {
    it('should list one parking.', async () => {
      mockService.findOne.mockResolvedValue(parkings[0]);
      const response = await controller.findOne(1);

      expect(response).toEqual(parkings[0]);
      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
    it('should throw an exception when list one parking.', async () => {
      jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error());

      expect(service.findOne(1)).rejects.toThrowError();
    });
  });

  describe('When try to update parking data.', () => {
    it('should update a one parking data.', async () => {
      const input: UpdateParkingDto = {
        motorcycleCapacity: 15,
        carCapacity: 25,
      };
      mockService.update.mockResolvedValue(updatedParking);
      const result = await controller.update(1, input);

      expect(result).toMatchObject({
        motorcycleCapacity: updatedParking.motorcycleCapacity,
        carCapacity: updatedParking.carCapacity,
      });
      expect(service.update).toBeCalledTimes(1);
      expect(service.update).toBeCalledWith(1, input);
    });
    it('should throw an exception when update one parking.', () => {
      jest.spyOn(service, 'update').mockRejectedValueOnce(new Error());

      expect(service.update).rejects.toThrowError();
    });
  });

  describe('When try to delete parking.', () => {
    it('should delete parking.', async () => {
      mockService.remove.mockResolvedValue(undefined);
      const result = await controller.remove(1);

      expect(result).toBeUndefined();
    });
  });
});
