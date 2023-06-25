import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: 'Email for user/admin',
    default: 'user@parkinglot.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Password for user/admin',
    default: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
