import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT_EXPIRATION, JWT_SECRET } from 'src/config/constants';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: JWT_EXPIRATION },
    }),
    UsersModule,
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
