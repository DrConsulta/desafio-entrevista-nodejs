import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  collor: string;

  @Column()
  licensePlate: string;

  @Column()
  type: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  constructor(vehicle?: Partial<Vehicle>) {
    this.id = vehicle?.id;
    this.brand = vehicle?.brand;
    this.model = vehicle?.model;
    this.collor = vehicle?.collor;
    this.licensePlate = vehicle?.licensePlate;
    this.type = vehicle?.type;
    this.createdAt = vehicle?.createdAt;
    this.updatedAt = vehicle?.updatedAt;
    this.deletedAt = vehicle?.deletedAt;
  }
}
