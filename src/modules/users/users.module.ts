import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from 'src/database/entities/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/database/repository/User.repository';
import { JwtModule } from '@nestjs/jwt';
import { JWT_EXPIRATION, JWT_SECRET } from 'src/config/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserRepository]), // Import TypeOrmModule and register User entity
  ],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
  exports: [UsersService, UserRepository],
})
export class UsersModule {}
