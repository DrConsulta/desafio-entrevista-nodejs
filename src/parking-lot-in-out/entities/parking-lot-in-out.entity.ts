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

  @Column({ name: 'parking_lot_id', type: 'integer' })
  parkingLotId!: number;

  @Column({ name: 'vehicle_id', type: 'integer' })
  vehicleId!: number;

  @Column({ name: 'vehicle_in', type: 'varchar' })
  vehicleIn!: string;

  @Column({ name: 'vehicle_out', type: 'varchar', nullable: true })
  vehicleOut?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
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
