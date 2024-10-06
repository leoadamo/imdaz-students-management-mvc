// DEPENDENCIES
import { Repository } from 'typeorm';

// DTOs
import { CreateStudentDto } from './dto/create-student.dto';

// ENTITIES
import { Student } from './student.entity';

export interface StudentsRepository extends Repository<Student> {
  this: Repository<Student>;
  createStudent(Student: CreateStudentDto);
  getStudent(id: string): Promise<Student>;
  getStudents(): Promise<Student[]>;
}

export const customStudentsRepository: Pick<StudentsRepository, any> = {
  createStudent(this: Repository<Student>, Student) {
    return this.save(Student);
  },

  getStudent(this: Repository<Student>, id) {
    return this.findOne({ where: { id } });
  },

  getStudents(this: Repository<Student>) {
    return this.find();
  },
};
