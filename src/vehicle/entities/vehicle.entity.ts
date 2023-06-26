import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum vehicleType {
  MOTORCYCLE = 'Motorcycle',
  CAR = 'Car',
}

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar' })
  @ApiProperty()
  brand: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  model: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  collor: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  licensePlate: string;

  @Column({ type: 'enum', enum: vehicleType })
  @ApiProperty()
  type: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt!: Date;

  constructor(vehicle?: Partial<Vehicle>) {
    this.id = vehicle?.id;
    this.brand = vehicle?.brand;
    this.model = vehicle?.model;
    this.collor = vehicle?.collor;
    this.licensePlate = vehicle?.licensePlate;
    this.type = vehicle?.type;
    this.createdAt = vehicle?.createdAt;
    this.updatedAt = vehicle?.updatedAt;
  }
}
