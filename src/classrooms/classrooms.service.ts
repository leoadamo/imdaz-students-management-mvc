// DEPENDENCIES
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// DTOs
import { CreateClassroomDto } from './dto/create-classroom.dto';

// ENTITIES
import { Classroom } from './classroom.entity';

// REPOSITORY
import { ClassroomsRepository } from './classrooms.repository';

@Injectable()
export class ClassroomsService {
  constructor(
    @InjectRepository(Classroom)
    private classRoomsRepository: ClassroomsRepository,
  ) {}

  createClassroom(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    return this.classRoomsRepository.createClassroom(createClassroomDto);
  }

  getClassrooms(): Promise<Classroom[]> {
    return this.classRoomsRepository.getClassrooms();
  }

  async getClassroom(id: string): Promise<Classroom> {
    const found = await this.classRoomsRepository.getClassroom(id);

    if (!found) {
      throw new NotFoundException(
        `The classroom with the given '${id}' ID was not found.`,
      );
    }

    return this.classRoomsRepository.getClassroom(id);
  }
}
