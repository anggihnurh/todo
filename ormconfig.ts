// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { DB_SERVER, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const config = {
  type: 'postgres',
  host: DB_SERVER,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsTableName: 'migration',
  migrations: ['migrations/*.ts'],
  keepConnectionAlive: false,
  cli: {
    entitiesDir: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrationsDir: 'migrations',
  },
};

export = config;
