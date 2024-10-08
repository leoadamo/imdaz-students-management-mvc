// DEPENDENCIES
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import {
  getDataSourceToken,
  getRepositoryToken,
  TypeOrmModule,
} from '@nestjs/typeorm';

// CONTROLLERS
import { ClassroomsController } from './classrooms.controller';

// ENTITIES
import { Classroom } from './classroom.entity';

// SERVICES
import { ClassroomsService } from './classrooms.service';

// REPOSITORIES
import { customClassroomsRepository } from './classrooms.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Classroom])],
  controllers: [ClassroomsController],
  providers: [
    {
      provide: getRepositoryToken(Classroom),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource
          .getRepository(Classroom)
          .extend(customClassroomsRepository);
      },
    },
    ClassroomsService,
  ],
})
export class ClassroomsModule {}
