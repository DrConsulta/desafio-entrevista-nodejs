import { Module } from '@nestjs/common';
import { UserService } from '@src/user/user.service';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
