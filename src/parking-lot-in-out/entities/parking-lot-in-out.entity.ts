import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
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
  vehicleIn!: Date;

  @Column()
  vehicleOut?: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  constructor(parkingLotInOut?: Partial<ParkingLotInOut>) {
    this.id = parkingLotInOut?.id;
    this.parkingLotId = parkingLotInOut?.parkingLotId;
    this.vehicleId = parkingLotInOut?.vehicleId;
    this.vehicleIn = parkingLotInOut?.vehicleIn;
    this.vehicleOut = parkingLotInOut?.vehicleOut;
  }
}
