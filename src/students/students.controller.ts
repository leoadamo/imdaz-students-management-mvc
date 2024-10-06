// DEPENDENCIES
import { Controller, Get, Render } from '@nestjs/common';

// SERVICES
import { StudentsService } from './students.service';

// TYPES
import type { IStudents } from './types';

@Controller()
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  @Render('index')
  async root(): Promise<IStudents> {
    const students = await this.studentsService.getStudents();

    return {
      students,
    };
  }
}
