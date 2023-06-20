import { Test, TestingModule } from '@nestjs/testing';
import { VehicleController } from '@src/vehicle/vehicle.controller';
import { VehicleService } from '@src/vehicle/vehicle.service';
import { Vehicle } from '@src/vehicle/entities/vehicle.entity';
import { CreateVehicleDto } from '@src/vehicle/dto/create-vehicle.dto';
import { UpdateVehicleDto } from '@src/vehicle/dto/update-vehicle.dto';

describe('VehicleController', () => {
  let controller: VehicleController;
  let service: VehicleService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  const vehicles: Vehicle[] = [
    {
      id: 1,
      brand: 'Honda',
      model: 'Civic',
      collor: 'Black',
      licensePlate: 'AAA 0000',
      type: 'Car',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Hornet',
      collor: 'Black',
      licensePlate: 'BBB 0002',
      type: 'Motorcycle',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const newVehicle: Vehicle = new Vehicle({
    brand: 'Honda',
    model: 'Civic',
    collor: 'Black',
    licensePlate: 'AAA 0000',
    type: 'Sedan',
  });

  const updatedVehicle = new Vehicle({
    collor: 'Silver',
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleController],
      providers: [
        {
          provide: VehicleService,
          useValue: mockService,
        },
      ],
    }).compile();

    mockService.create.mockReset();
    mockService.findAll.mockReset();
    mockService.findOne.mockReset();
    mockService.update.mockReset();
    mockService.remove.mockReset();

    controller = module.get<VehicleController>(VehicleController);
    service = module.get<VehicleService>(VehicleService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('When try to create a new vehicle.', () => {
    it('should create a new vehicle.', async () => {
      const input: CreateVehicleDto = {
        brand: 'Honda',
        model: 'Civic',
        collor: 'Black',
        licensePlate: 'AAA 0000',
        type: 'Sedan',
      };

      mockService.create.mockResolvedValue(newVehicle);
      const response = await controller.create(input);

      expect(response).toEqual(newVehicle);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(input);
    });
    it('should throw an exception when create a new vehicle.', () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());

      expect(service.create).rejects.toThrowError();
    });
  });

  describe('When try to list all vehicles.', () => {
    it('should return a list all vehicles.', async () => {
      mockService.findAll.mockResolvedValue(vehicles);
      const response = await controller.findAll();

      expect(response).toEqual(vehicles);
      expect(typeof response).toEqual('object');
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
    it('should thow an exception when list all vehicles.', () => {
      jest.spyOn(service, 'findAll').mockRejectedValueOnce(new Error());

      expect(service.findAll).rejects.toThrowError();
    });
  });

  describe('When try to list one vehicle.', () => {
    it('should list one vehicle.', async () => {
      mockService.findOne.mockResolvedValue(vehicles[0]);
      const response = await controller.findOne(1);

      expect(response).toEqual(vehicles[0]);
      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
    it('should throw an exception when list one vehicle.', async () => {
      jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error());

      expect(controller.findOne(1)).rejects.toThrowError();
    });
  });

  describe('When try to update vehicle data.', () => {
    it('should update a one vehicle data.', async () => {
      const input: UpdateVehicleDto = {
        collor: 'Silver',
      };
      mockService.update.mockResolvedValue(updatedVehicle);
      const result = await controller.update(1, input);

      expect(result).toMatchObject({
        collor: updatedVehicle.collor,
      });
      expect(service.update).toBeCalledTimes(1);
      expect(service.update).toBeCalledWith(1, input);
    });
    it('should throw an exception when update one vehicle.', () => {
      jest.spyOn(service, 'update').mockRejectedValueOnce(new Error());

      expect(service.update).rejects.toThrowError();
    });
  });

  describe('When try to delete vehicle.', () => {
    it('should delete vehicle.', async () => {
      mockService.remove.mockResolvedValue(undefined);
      const result = await controller.remove(1);

      expect(result).toBeUndefined();
    });
  });
});
