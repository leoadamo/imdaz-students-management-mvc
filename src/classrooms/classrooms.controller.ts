// DEPENDENCIES
import { Body, Controller, Get, Post, Render } from '@nestjs/common';

// ENTITIES
import { Classroom } from './classroom.entity';

// SERVICES
import { ClassroomsService } from './classrooms.service';

// DTOS
import { CreateClassroomDto } from './dto/create-classroom.dto';
import type { IClassroom } from './types';

@Controller()
export class ClassroomsController {
  constructor(private classroomsService: ClassroomsService) {}

  @Get('/turmas')
  @Render('classrooms')
  view(): IClassroom {
    return {
      title: 'Cadastro de turmas',
      description:
        'Preencha as informações necessárias para criar uma nova turma.',
    };
  }

  @Post('/classrooms')
  @Render('classrooms')
  async createClassroom(
    @Body() createClassroomDto: CreateClassroomDto,
  ): Promise<IClassroom> {
    const response: Classroom =
      await this.classroomsService.createClassroom(createClassroomDto);

    return {
      title: 'Cadastro de turmas',
      description:
        'Cadastro efetuado com sucesso! Confira os detalhes da nova turma.',
      response,
    };
  }
}
