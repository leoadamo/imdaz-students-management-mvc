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
  view(): IStudents {
    return {
      title: 'IMDAZ - Sistema de Gerenciamento de Alunos',
      description:
        'Aqui você pode gerenciar alunos e turmas de uma maneira simples e intuitiva.',
    };
  }

  @Get('/alunos')
  @Render('students')
  async getStudents(): Promise<IStudents> {
    const students = await this.studentsService.getStudents();

    return {
      title: 'Listagem de alunos',
      description: 'Consulte informações dos alunos matriculados.',
      students,
    };
  }

  @Get('/alunos/matricula')
  @Render('students-registration')
  createStudents() {
    return {
      title: 'Matrícula de alunos',
      description:
        'Preencha o formulário de matrícula para registrar um novo aluno no instituto.',
    };
  }
}
