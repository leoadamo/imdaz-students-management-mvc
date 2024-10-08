// DEPENDENCIES
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

// MODULES
import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './students/students.module';
import { ClassroomsModule } from './classrooms/classrooms.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    DatabaseModule,
    StudentsModule,
    ClassroomsModule,
  ],
})
export class AppModule {}
