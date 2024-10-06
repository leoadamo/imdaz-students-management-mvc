// DEPENDENCIES
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

// MODULES
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot({}), DatabaseModule],
})
export class AppModule {}
