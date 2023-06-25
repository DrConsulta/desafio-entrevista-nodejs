import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ParkingLot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  motorcycleCapacity: number;

  @Column()
  carCapacity: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  constructor(parkingLot?: Partial<ParkingLot>) {
    this.id = parkingLot?.id;
    this.name = parkingLot?.name;
    this.document = parkingLot?.document;
    this.address = parkingLot?.address;
    this.phone = parkingLot?.phone;
    this.motorcycleCapacity = parkingLot?.motorcycleCapacity;
    this.carCapacity = parkingLot?.carCapacity;
    this.createdAt = parkingLot?.createdAt;
    this.updatedAt = parkingLot?.updatedAt;
  }
}
