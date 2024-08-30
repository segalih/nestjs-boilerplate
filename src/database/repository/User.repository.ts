import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './Base.repository';
import { User } from '../entities/User.entity';
import { CreateUserDto } from 'src/dto/user/CreateUserDto.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    return this.repository.save(user);
  }
  // You can add User-specific methods here
}
