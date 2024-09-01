import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { User } from 'src/database/entities/User.entity';
import { UserRepository } from 'src/database/repository/User.repository';
import { CreateUserDto } from 'src/dto/user/CreateUserDto.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async create(user: CreateUserDto): Promise<User> {
    const newPassword = await bcrypt.hash(user.password, 10);
    return await this.usersRepository.create({
      ...user,
      password: newPassword,
    });
  }

  async page(page: number = 1, limit: number = 10): Promise<any> {
    return await this.usersRepository.findAllWithPagination(page, limit, {
      where: {
        deleted_at: null,
      },
    });
  }
}
