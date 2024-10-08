// ENTITIES
import { Classroom } from '../classroom.entity';

export interface IClassroom {
  title: string;
  description: string;
  response?: Classroom | Classroom[];
}

export enum EPeriods {
  Morning = 'Manhã',
  Afternoon = 'Tarde',
  Night = 'Noite',
}
