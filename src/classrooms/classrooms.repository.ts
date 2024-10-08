// DEPENDENCIES
import { Repository } from 'typeorm';

// DTOs
import { CreateClassroomDto } from './dto/create-classroom.dto';

// ENTITIES
import { Classroom } from './classroom.entity';

export interface ClassroomsRepository extends Repository<Classroom> {
  this: Repository<Classroom>;
  createClassroom(Classroom: CreateClassroomDto);
  getClassroom(id: string): Promise<Classroom>;
  getClassrooms(): Promise<Classroom[]>;
}

export const customClassroomsRepository: Pick<ClassroomsRepository, any> = {
  createClassroom(this: Repository<Classroom>, Classroom) {
    return this.save(Classroom);
  },

  getClassroom(this: Repository<Classroom>, id) {
    return this.findOne({ where: { id } });
  },

  getClassrooms(this: Repository<Classroom>) {
    return this.find();
  },
};
