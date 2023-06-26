import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthLoginRequestSwagger } from '@src/auth/swagger/auth.login-request.swagger';
import { AuthProfileRequestSwagger } from '@src/auth/swagger/auth.profile-request.swagger';
import { AuthBadRequestSwagger } from '@src/auth/swagger/auth.bad-request.swagger';
import { AuthUnauthorizedSwagger } from '@src/auth/swagger/auth.unauthorized.swagger';
import { AuthGuard } from '@src/auth/auth.guard';
import { AuthService } from '@src/auth/auth.service';
import { SignInDto } from '@src/auth/dto/sign-in.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  /**
   * Inject service dependency.
   */
  constructor(private authService: AuthService) {}

  /**
   * Perform user login with credentials.
   */
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Authenticate user for generate access token.' })
  @ApiResponse({
    status: 200,
    description: 'User valid login credentials.',
    type: AuthLoginRequestSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'User have invalid login credentials  request.',
    type: AuthBadRequestSwagger,
  })
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  /**
   * Get the authenticated user profile.
   */
  @Get('profile')
  @ApiOperation({ summary: 'Get authenticated user by token.' })
  @ApiResponse({
    status: 200,
    description: 'User valid login credentials.',
    type: AuthProfileRequestSwagger,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized for get user profile.',
    type: AuthUnauthorizedSwagger,
  })
  @UseGuards(AuthGuard)
  getProfile(@Request() req) {
    console.log(req);
    return req.user;
  }
}
