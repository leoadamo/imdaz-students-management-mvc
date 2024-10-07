// ENTITIES
import { Student } from '../student.entity';

export interface IStudents {
  title: string;
  description: string;
  students?: Student | Student[];
}

export enum EGenders {
  Male = 'Masculino',
  Female = 'Feminino',
  Other = 'Outro',
}

export enum EEthnicity {
  White = 'Branco',
  Black = 'Negro',
  Asian = 'Pardo',
  Indium = 'índio',
  Other = 'Outro',
}
