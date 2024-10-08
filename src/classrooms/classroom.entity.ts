// DEPENDENCIES
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TYPES
import { EPeriods } from './types';

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100 })
  description: string;

  @Column({ type: 'enum', enum: EPeriods })
  period: EPeriods;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;
}
