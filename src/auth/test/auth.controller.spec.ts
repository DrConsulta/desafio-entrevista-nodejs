import { UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from '@src/auth/auth.controller';
import { UserService } from '@src/user/user.service';
import { AuthService } from '@src/auth/auth.service';
import { SignInDto } from '@src/auth/dto/sign-in.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  const mockService = {
    signIn: jest.fn(),
  };
  const mockJwtService = {
    signAsync: jest.fn(),
  };
  const mockUserService = {
    findOne: jest.fn(),
  };
  const newToken: any = {
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc2NjU5MDV9.qJGMGWC3FpsrOZ-XRtzSEcmCv7ybrKz9tPX-qIZZMOI',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockService,
        },
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('When try to login with user credentials.', () => {
    it('should accept login user with valid credential.', async () => {
      const input: SignInDto = {
        email: 'admin@parkinglot.com',
        password: 'password',
      };

      mockService.signIn.mockResolvedValue(newToken);
      const response = await controller.signIn(input);

      expect(response).toEqual(newToken);
      expect(service.signIn).toHaveBeenCalledTimes(1);
      expect(service.signIn).toHaveBeenCalledWith(input.email, input.password);
    });
    it('should throw an exception when try to login with invalid credential.', () => {
      jest
        .spyOn(service, 'signIn')
        .mockRejectedValueOnce(new UnauthorizedException());

      expect(service.signIn).rejects.toThrowError();
    });
  });
});
