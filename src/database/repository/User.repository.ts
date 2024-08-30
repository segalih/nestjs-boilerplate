import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/user/CreateUserDto.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    try {
      return this.repository.save(user);
    } catch (error) {
      console.log('aa');
    }
  }
  // You can add User-specific methods here
}
