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
import { AuthGuard } from '@src/auth/auth.guard';
import { AuthService } from '@src/auth/auth.service';
import { SignInDto } from '@src/auth/dto/sign-in.dto';

@Controller('auth')
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
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  /**
   * Get the authenticated user profile.
   */
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req);
    return req.user;
  }
}
