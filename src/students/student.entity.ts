// DEPENDENCIES
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'date' })
  date_of_birth: Date;

  @Column()
  address: string;

  @Column({ length: 20 })
  phone: string;

  @Column()
  email: string;
}
