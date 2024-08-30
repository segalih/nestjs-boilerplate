import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/user/CreateUserDto.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() data: CreateUserDto) {
    try {
      console.log('kocak1');
      return await this.usersService.create(data);
    } catch (error) {
      throw error;
    }
  }
}
