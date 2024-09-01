import { Body, Controller, Get } from '@nestjs/common';
import { LoginDto } from 'src/dto/LoginDto.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('login')
  async login(@Body() data: LoginDto) {
    return this.authService.signIn(data.username, data.password);
  }
}
