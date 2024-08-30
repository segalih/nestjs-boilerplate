import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { UserRepository } from 'src/database/repository/User.repository';

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {
  static forRoot() {
    return {
      module: DatabaseModule,
    };
  }
}
