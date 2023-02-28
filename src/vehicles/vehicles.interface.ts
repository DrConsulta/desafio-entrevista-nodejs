import { VehicleType } from '@/lib/enum/type';

export interface Vehicles {
  id: number;
  brand: string;
  model: string;
  color: string;
  plate: string;
  type: VehicleType;
}
