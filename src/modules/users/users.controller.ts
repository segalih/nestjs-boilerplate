import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/user/CreateUserDto.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Public } from 'src/common/decorator/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('register')
  async create(@Body() data: CreateUserDto) {
    try {
      console.log('kocak1');
      return await this.usersService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.usersService.page(
      page > 0 ? page : 1,
      limit > 0 ? limit : 10,
    );
  }
}
