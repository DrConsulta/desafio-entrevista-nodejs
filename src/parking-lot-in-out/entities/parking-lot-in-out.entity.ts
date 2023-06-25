import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ParkingLotInOut {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parkingLotId!: number;

  @Column()
  vehicleId!: number;

  @Column()
  vehicleIn!: string;

  @Column()
  vehicleOut?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  constructor(parkingLotInOut?: Partial<ParkingLotInOut>) {
    this.id = parkingLotInOut?.id;
    this.parkingLotId = parkingLotInOut?.parkingLotId;
    this.vehicleId = parkingLotInOut?.vehicleId;
    this.vehicleIn = parkingLotInOut?.vehicleIn;
    this.vehicleOut = parkingLotInOut?.vehicleOut;
    this.createdAt = parkingLotInOut?.createdAt;
    this.updatedAt = parkingLotInOut?.updatedAt;
  }
}
