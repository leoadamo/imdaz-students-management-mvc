// DEPENDENCIES
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class ClassroomsController {
  @Get('/turmas')
  @Render('classrooms')
  createClasses() {
    return {
      title: 'Cadastro de turmas',
      description:
        'Preencha as informações necessárias para criar uma nova turma.',
    };
  }
}
