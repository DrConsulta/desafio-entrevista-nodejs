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

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  document: string;

  @Column({ type: 'varchar' })
  address: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ name: 'motorcycle_capacity', type: 'integer' })
  motorcycleCapacity: number;

  @Column({ name: 'car_capacity', type: 'integer' })
  carCapacity: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
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
