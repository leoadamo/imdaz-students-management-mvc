// DEPENDENCIES
import {
  IsNotEmpty,
  IsISO8601,
  IsPhoneNumber,
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';

// TYPES
import { EEthnicity, EGenders } from '../types';

export class CreateStudentDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum({ entity: EGenders })
  gender: EGenders;

  @IsNotEmpty()
  @IsEnum({ entity: EEthnicity })
  ethnicity: EEthnicity;

  @IsNotEmpty()
  @IsISO8601()
  date_of_birth: Date;

  @IsNotEmpty()
  @IsBoolean()
  disability: boolean;

  @IsPhoneNumber('BR')
  phone: string;

  @IsOptional()
  grade: string;

  @IsNotEmpty()
  @IsBoolean()
  literate: boolean;

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
  @IsBoolean()
  brother_or_sis_registered: boolean;

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
  @IsBoolean()
  government_benefits: boolean;

  @IsNotEmpty()
  @IsBoolean()
  image_rights: boolean;
}
