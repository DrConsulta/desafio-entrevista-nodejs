import { ApiProperty } from '@nestjs/swagger';

export class AuthProfileRequestSwagger {
  @ApiProperty({
    default: 1,
  })
  sub: number;

  @ApiProperty({
    default: 'admin@parkinglot.comord',
  })
  email: string;

  @ApiProperty({
    default: 1687665905,
  })
  iat: number;
}
