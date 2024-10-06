// DEPENDENCIES
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

// MODULES
import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [ConfigModule.forRoot({}), DatabaseModule, StudentsModule],
})
export class AppModule {}
