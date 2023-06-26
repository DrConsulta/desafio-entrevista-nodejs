import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ParkingLotInOutService } from '@src/parking-lot-in-out/parking-lot-in-out.service';
import { ParkingLotInOut } from '@src/parking-lot-in-out/entities/parking-lot-in-out.entity';
import { ParkingLotInOutTestMocks } from '@src/commom/test/mocks/parking-lot-in-out';

describe('ParkingLotInOutService', () => {
  let service: ParkingLotInOutService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ParkingLotInOutService,
        {
          provide: getRepositoryToken(ParkingLotInOut),
          useValue: mockRepository,
        },
      ],
    }).compile();

    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.find.mockReset();
    mockRepository.findOneBy.mockReset();
    mockRepository.update.mockReset();
    mockRepository.remove.mockReset();

    service = module.get<ParkingLotInOutService>(ParkingLotInOutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When create a parking lot in out.', () => {
    it('shoud create a new parking lot in out.', async () => {
      const parking = ParkingLotInOutTestMocks.getValidParkingLotInOutDto();
      mockRepository.create.mockReturnValue(parking);
      mockRepository.save.mockReturnValue(parking);
      const newParking = await service.create(parking);

      expect(newParking).toMatchObject(parking);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });

    it('should return InternalServerErrorException for error on parking lot in out creation.', async () => {
      const parking = ParkingLotInOutTestMocks.getValidParkingLotInOutDto();
      mockRepository.create.mockReturnValue(parking);
      mockRepository.save.mockReturnValue(null);

      await service.create(parking).catch((ex) => {
        expect(ex).toBeInstanceOf(InternalServerErrorException);
        expect(ex).toMatchObject({
          message: 'Problem to create a parking lot in out. Try again!',
        });
      });
    });
  });

  describe('When find all parking lots in out.', () => {
    it('should be list all parking lots in out.', async () => {
      const parking = ParkingLotInOutTestMocks.getValidParkingLotInOutDto();
      mockRepository.find.mockReturnValue([parking, parking]);
      const parkings = await service.findAll();

      expect(parkings).toHaveLength(2);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('When find one parking lot in out by id.', () => {
    it('should find a existing parking lot in out.', async () => {
      const parking = ParkingLotInOutTestMocks.getValidParkingLotInOut();
      mockRepository.findOneBy.mockReturnValue(parking);
      const foundParkingLotInOut = await service.findOne(1);

      expect(foundParkingLotInOut).toMatchObject({
        parkingLotId: parking.parkingLotId,
        vehicleId: parking.vehicleId,
        vehicleIn: parking.vehicleIn,
      });
      expect(mockRepository.findOneBy).toHaveBeenCalledTimes(1);
    });

    it('should return NotFoundException for invalid parking lot in out.', async () => {
      mockRepository.findOneBy.mockReturnValue(null);

      await service.findOne(666).catch((ex) => {
        expect(ex).toBeInstanceOf(NotFoundException);
        expect(ex).toMatchObject({
          message: 'Parking not found!',
        });
      });
      expect(mockRepository.findOneBy).toHaveBeenCalledTimes(1);
    });
  });

  describe('When update parking lot in out by id.', () => {
    it('should perform update to existing parking lot in out.', async () => {
      const parking = ParkingLotInOutTestMocks.getValidParkingLotInOutDto();
      mockRepository.findOneBy.mockReturnValue(parking);
      const updateParkingData = {
        collor: 'Silver',
      };
      mockRepository.update.mockReturnValue({
        ...parking,
        ...updateParkingData,
      });
      mockRepository.create.mockReturnValue({
        ...parking,
        ...updateParkingData,
      });
      const updatedUser = await service.update(1, {
        ...parking,
        ...updateParkingData,
      });

      expect(updatedUser).toMatchObject(updateParkingData);
      expect(mockRepository.findOneBy).toBeCalledTimes(1);
      expect(mockRepository.update).toBeCalledTimes(1);
      expect(mockRepository.create).toBeCalledTimes(1);
    });
  });

  describe('When delete parking lot in out by id.', () => {
    it('should perform delete to existing parking lot in out.', async () => {
      const parking = ParkingLotInOutTestMocks.getValidParkingLotInOutDto();
      mockRepository.findOneBy.mockReturnValue(parking);
      mockRepository.remove.mockReturnValue(parking);
      const deleteAction = await service.remove(1);

      expect(deleteAction).toBe(true);
      expect(mockRepository.findOneBy).toBeCalledTimes(1);
      expect(mockRepository.remove).toBeCalledTimes(1);
    });

    it('should not perform delete to existing parking lot in out.', async () => {
      const parking = ParkingLotInOutTestMocks.getValidParkingLotInOutDto();
      mockRepository.findOneBy.mockReturnValue(parking);
      mockRepository.remove.mockReturnValue(null);
      const deleteAction = await service.remove(1);

      expect(deleteAction).toBe(false);
      expect(mockRepository.findOneBy).toBeCalledTimes(1);
      expect(mockRepository.remove).toBeCalledTimes(1);
    });
  });
});
