import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@src/user/user.service';

@Injectable()
export class AuthService {
  /**
   * Inject services dependencies.
   */
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  /**
   * Perform user login with credentials.
   */
  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
