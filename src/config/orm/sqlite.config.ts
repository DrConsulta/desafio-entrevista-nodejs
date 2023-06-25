import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const ormConfig: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: ['dist/**/*.entity{.js, .ts}'],
  synchronize: true,
  migrations: ['dist/src/database/migrations/*.js'],
};

export default ormConfig;
