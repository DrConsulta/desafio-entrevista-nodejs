import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum VehicleType {
  MOTO = 'moto',
  CAR = 'car',
}

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  color: string;

  @Column()
  plate: string;

  @Column({
    type: 'enum',
    enum: VehicleType,
    default: VehicleType.CAR,
  })
  type: VehicleType;
}
