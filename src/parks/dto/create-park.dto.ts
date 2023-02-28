import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateParkDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of a park',
    default: '',
  })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The document of a park',
    default: '',
  })
  public document: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The address of a park',
    default: '',
  })
  public address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The phone of a park',
    default: '',
  })
  public phone: string;

  @IsNumber()
  @ApiProperty({
    description: 'The max car quantity of a park',
    default: 1,
  })
  public car_qty: number;

  @IsNumber()
  @ApiProperty({
    description: 'The max moto quantity of a park',
    default: 1,
  })
  public moto_qty: number;
}
