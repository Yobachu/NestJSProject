import * as path from 'path';
import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mediumclone',
    password: '123',
    database: 'mediumclone',
    entities: [path.join(__dirname + '/**/*.entity{.ts, .js}')],
    synchronize: true,

};



export default config;
