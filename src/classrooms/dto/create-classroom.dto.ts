// DEPENDENCIES
import { IsNotEmpty, IsISO8601, IsEnum } from 'class-validator';

// TYPES
import { EPeriods } from '../types';

export class CreateClassroomDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum({ entity: EPeriods })
  period: EPeriods;

  @IsNotEmpty()
  @IsISO8601()
  start_date: Date;

  @IsNotEmpty()
  @IsISO8601()
  end_date: Date;
}
