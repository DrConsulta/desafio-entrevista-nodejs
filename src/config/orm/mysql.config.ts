import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const ormConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'mysql',
  port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ['dist/**/*.entity{.js, .ts}'],
  synchronize: true,
};

export default ormConfig;
