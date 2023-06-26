import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginRequestSwagger {
  @ApiProperty({
    default: 'admin@parkinglot.com',
  })
  email: string;

  @ApiProperty({
    default: 'password',
  })
  password: string;
}
