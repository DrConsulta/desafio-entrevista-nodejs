import { ApiProperty } from '@nestjs/swagger';

export class AuthBadRequestSwagger {
  @ApiProperty({
    default: 400,
  })
  statusCode: number;

  @ApiProperty({
    default: [
      'email must be a string',
      'email should not be empty',
      'password must be a string',
      'password should not be empty',
    ],
    isArray: true,
  })
  message: string[];

  @ApiProperty({
    default: 'Bad Request',
  })
  error: string;
}
