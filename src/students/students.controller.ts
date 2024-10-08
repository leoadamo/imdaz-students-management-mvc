// DEPENDENCIES
import { Controller, Get, Post, Body, Render } from '@nestjs/common';

// ENTITIES
import { Student } from './student.entity';

// SERVICES
import { StudentsService } from './students.service';

// DTO
import { CreateStudentDto } from './dto/create-student.dto';

// TYPES
import type { IStudents } from './types';

@Controller()
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get('/')
  @Render('index')
  root(): IStudents {
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
      response: students,
    };
  }

  @Get('/alunos/matricula')
  @Render('students-registration')
  view() {
    return {
      title: 'Matrícula de alunos',
      description:
        'Preencha o formulário de matrícula para registrar um novo aluno no instituto.',
    };
  }

  @Post('/alunos/matricula')
  @Render('students-registration')
  async createStudents(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<IStudents> {
    const response: Student =
      await this.studentsService.createStudent(createStudentDto);

    return {
      title: 'Matrícula de alunos',
      description:
        'Cadastro efetuado com sucesso! Confira alguns detalhes do novo turma.',
      response,
    };
  }
}
