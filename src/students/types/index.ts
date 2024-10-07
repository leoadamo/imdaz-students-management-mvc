// ENTITIES
import { Student } from '../student.entity';

export interface IStudents {
  title: string;
  description: string;
  students: Student[];
}

export enum EGenders {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum EEthnicity {
  White = 'white',
  Black = 'black',
  Asian = 'asian',
  Indium = 'indium',
  Other = 'other',
}
