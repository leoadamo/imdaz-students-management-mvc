// DEPENDENCIES
import { IsNotEmpty, IsISO8601, IsEnum, IsOptional } from 'class-validator';

// TYPES
import { EEthnicity, EGenders } from '../types';

export class CreateStudentDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum(EGenders)
  gender: EGenders;

  @IsNotEmpty()
  @IsEnum(EEthnicity)
  ethnicity: EEthnicity;

  @IsNotEmpty()
  @IsISO8601()
  date_of_birth: Date;

  @IsNotEmpty()
  disability: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  grade: string;

  @IsNotEmpty()
  literate: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  neighborhood: string;

  @IsOptional()
  cpf: string;

  @IsOptional()
  rg: string;

  @IsISO8601()
  rg_created_at: Date;

  @IsNotEmpty()
  children: number;

  @IsNotEmpty()
  brother_or_sis_registered: string;

  @IsOptional()
  nis: string;

  @IsOptional()
  school_name: string;

  @IsNotEmpty()
  tutor_name: string;

  @IsNotEmpty()
  tutor_kindship: string;

  @IsNotEmpty()
  earnings: number;

  @IsNotEmpty()
  government_benefits: string;

  @IsNotEmpty()
  image_rights: string;
}
