import { databaseEntities } from './';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  databaseHost,
  databaseUser,
  databasePass,
  databaseName,
} from '../config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseHost,
      username: databaseUser,
      password: databasePass,
      database: databaseName,
      entities: databaseEntities,
      synchronize: true,
    }),
    TypeOrmModule.forFeature(databaseEntities),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
