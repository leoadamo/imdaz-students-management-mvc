// DEPENDENCIES
import { Controller, Get, Render } from '@nestjs/common';

// SERVICES
import { StudentsService } from './students.service';

// TYPES
import type { IStudents } from './types';

@Controller()
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get('/')
  @Render('index')
  async getStudents(): Promise<IStudents> {
    const students = await this.studentsService.getStudents();

    return {
      title: 'Listagem de alunos',
      description: 'Consulte informações dos alunos matriculados.',
      students,
    };
  }

  @Get('/alunos')
  @Render('register')
  createStudents() {
    return {
      title: 'Matrícula de alunos',
      description:
        'Preencha o formulário de matrícula para registrar um novo aluno no instituto.',
    };
  }
}
