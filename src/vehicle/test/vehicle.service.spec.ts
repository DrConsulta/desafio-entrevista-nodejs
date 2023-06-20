import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VehicleService } from '@src/vehicle/vehicle.service';
import { Vehicle } from '@src/vehicle/entities/vehicle.entity';
import { VehicleTestMocks } from '@src/commom/test/mocks/vehicle';

describe('VehicleService', () => {
  let service: VehicleService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    softDelete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehicleService,
        {
          provide: getRepositoryToken(Vehicle),
          useValue: mockRepository,
        },
      ],
    }).compile();

    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.find.mockReset();
    mockRepository.findOneBy.mockReset();
    mockRepository.update.mockReset();
    mockRepository.softDelete.mockReset();

    service = module.get<VehicleService>(VehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When create a vehicle.', () => {
    it('shoud create a new vehicle.', async () => {
      const vehicle = VehicleTestMocks.getValidVehicleDto();
      mockRepository.create.mockReturnValue(vehicle);
      mockRepository.save.mockReturnValue(vehicle);
      const newVehicle = await service.create(vehicle);

      expect(newVehicle).toMatchObject(vehicle);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });

    it('should return InternalServerErrorException for error on vehicle creation.', async () => {
      const vehicle = VehicleTestMocks.getValidVehicleDto();
      mockRepository.create.mockReturnValue(vehicle);
      mockRepository.save.mockReturnValue(null);

      await service.create(vehicle).catch((ex) => {
        expect(ex).toBeInstanceOf(InternalServerErrorException);
        expect(ex).toMatchObject({
          message: 'Problem to create a vehicle. Try again!',
        });
      });
    });
  });

  describe('When find all vehicles.', () => {
    it('should be list all vehicles.', async () => {
      const vehicle = VehicleTestMocks.getValidVehicleDto();
      mockRepository.find.mockReturnValue([vehicle, vehicle]);
      const vehicles = await service.findAll();

      expect(vehicles).toHaveLength(2);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('When find one vehicle by id.', () => {
    it('should find a existing vehicle.', async () => {
      const vehicle = VehicleTestMocks.getValidVehicle();
      mockRepository.findOneBy.mockReturnValue(vehicle);
      const foundVehicle = await service.findOne(1);

      expect(foundVehicle).toMatchObject({
        brand: vehicle.brand,
        model: vehicle.model,
        collor: vehicle.collor,
        licensePlate: vehicle.licensePlate,
        type: vehicle.type,
      });
      expect(mockRepository.findOneBy).toHaveBeenCalledTimes(1);
    });

    it('should return NotFoundException for invalid vehicle.', async () => {
      mockRepository.findOneBy.mockReturnValue(null);

      await service.findOne(666).catch((ex) => {
        expect(ex).toBeInstanceOf(NotFoundException);
        expect(ex).toMatchObject({
          message: 'Vehicle not found!',
        });
      });
      expect(mockRepository.findOneBy).toHaveBeenCalledTimes(1);
    });
  });

  describe('When update vehicle by id.', () => {
    it('should perform update to existing vehicle.', async () => {
      const vehicle = VehicleTestMocks.getValidVehicleDto();
      mockRepository.findOneBy.mockReturnValue(vehicle);
      const updateVehicleData = {
        collor: 'Silver',
      };
      mockRepository.update.mockReturnValue({
        ...vehicle,
        ...updateVehicleData,
      });
      mockRepository.create.mockReturnValue({
        ...vehicle,
        ...updateVehicleData,
      });
      const updatedUser = await service.update(1, {
        ...vehicle,
        ...updateVehicleData,
      });

      expect(updatedUser).toMatchObject(updateVehicleData);
      expect(mockRepository.findOneBy).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('When delete vehicle by id.', () => {
    it('should perform delete to existing vehicle.', async () => {
      const vehicle = VehicleTestMocks.getValidVehicleDto();
      mockRepository.findOneBy.mockReturnValue(vehicle);
      mockRepository.softDelete.mockReturnValue(vehicle);
      const deleteAction = await service.remove(1);

      expect(deleteAction).toBe(true);
      expect(mockRepository.findOneBy).toBeCalledTimes(1);
      expect(mockRepository.softDelete).toBeCalledTimes(1);
    });

    it('should not perform delete to existing vehicle.', async () => {
      const vehicle = VehicleTestMocks.getValidVehicleDto();
      mockRepository.findOneBy.mockReturnValue(vehicle);
      mockRepository.softDelete.mockReturnValue(null);
      const deleteAction = await service.remove(1);

      expect(deleteAction).toBe(false);
      expect(mockRepository.findOneBy).toBeCalledTimes(1);
      expect(mockRepository.softDelete).toBeCalledTimes(1);
    });
  });
});
