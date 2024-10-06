// DEPENDENCIES
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import {
  getDataSourceToken,
  getRepositoryToken,
  TypeOrmModule,
} from '@nestjs/typeorm';

// CONTROLLERS
import { StudentsController } from './students.controller';

// ENTITIES
import { Student } from './student.entity';

// SERVICES
import { StudentsService } from './students.service';

// REPOSITORIES
import { customStudentsRepository } from './students.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [
    {
      provide: getRepositoryToken(Student),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource
          .getRepository(Student)
          .extend(customStudentsRepository);
      },
    },
    StudentsService,
  ],
})
export class StudentsModule {}
