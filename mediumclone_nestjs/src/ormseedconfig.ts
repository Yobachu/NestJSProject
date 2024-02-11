import ormconfig from '@app/ormconfig'
import * as path from 'path'
import { ConnectionOptions } from 'typeorm';

const ormseedconfig: ConnectionOptions = {
  ...ormconfig,
  migrations: [path.join(__dirname, '/seeds/**/*{.ts, .js}')],
  cli: {
    migrationsDir: 'src/seeds',
  }
};

export default ormseedconfig;
