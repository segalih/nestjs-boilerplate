import {
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_TYPE,
  DB_USERNAME,
} from 'src/config/constants';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: DB_TYPE as any,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_USERNAME,
  entities: ['src/database/entity/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
