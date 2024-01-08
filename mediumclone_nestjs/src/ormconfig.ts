import {  DataSourceOptions } from 'typeorm';
import * as path from 'path';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '0000',
  database: 'mediumclone',
  entities: [path.join(__dirname, '/**/*.entity{.ts,.js}')],
  synchronize: false,
//   migrations: [path.join(__dirname, '/migrations/**/*{.ts, .js}')],
//   cli: {
//     migrationsDir: 'src/migrations',
//   }
};

export default config;
