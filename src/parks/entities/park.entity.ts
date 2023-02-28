import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Park {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 300 })
  name: string;

  @Column()
  document: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column('int')
  car_qty: number;

  @Column('int')
  moto_qty: number;
}
