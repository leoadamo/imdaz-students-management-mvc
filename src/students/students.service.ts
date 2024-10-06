// DEPENDENCIES
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// DTOs
import { CreateStudentDto } from './dto/create-student.dto';

// ENTITIES
import { Student } from './student.entity';

// REPOSITORY
import { StudentsRepository } from './students.repository';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: StudentsRepository,
  ) {}

  createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsRepository.createStudent(createStudentDto);
  }

  getStudents(): Promise<Student[]> {
    return this.studentsRepository.getStudents();
  }

  async getStudent(id: string): Promise<Student> {
    const found = await this.studentsRepository.getStudent(id);

    if (!found) {
      throw new NotFoundException(
        `The student with the given '${id}' ID was not found.`,
      );
    }

    return this.studentsRepository.getStudent(id);
  }
}
