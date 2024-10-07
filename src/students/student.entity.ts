// DEPENDENCIES
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TYPES
import { EEthnicity, EGenders } from './types';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'enum', enum: EGenders })
  gender: EGenders;

  @Column({ type: 'enum', enum: EEthnicity })
  ethnicity: EEthnicity;

  @Column({ type: 'date' })
  date_of_birth: Date;

  @Column({ type: 'bool' })
  disability: boolean;

  @Column({ length: 50, nullable: true })
  phone: string;

  @Column({ nullable: true })
  grade: string;

  @Column({ type: 'bool' })
  literate: boolean;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 50 })
  neighborhood: string;

  @Column({ length: 11, nullable: true })
  cpf: string;

  @Column({ length: 10, nullable: true })
  rg: string;

  @Column({ type: 'date', nullable: true })
  rg_created_at: Date;

  @Column()
  children: number;

  @Column({ type: 'bool' })
  brother_or_sis_registered: boolean;

  @Column({ length: 50, nullable: true })
  nis: string;

  @Column({ length: 100, nullable: true })
  school_name: string;

  @Column({ length: 100 })
  tutor_name: string;

  @Column({ length: 100 })
  tutor_kindship: string;

  @Column()
  earnings: number;

  @Column({ type: 'bool' })
  government_benefits: boolean;

  @Column({ type: 'bool' })
  image_rights: boolean;
}
