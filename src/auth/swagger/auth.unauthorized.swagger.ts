import { ApiProperty } from '@nestjs/swagger';

export class AuthUnauthorizedSwagger {
  @ApiProperty({
    default: 401,
  })
  statusCode: number;

  @ApiProperty({
    default: 'Unauthorized',
  })
  message: string;
}
