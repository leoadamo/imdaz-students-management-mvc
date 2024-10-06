// DEPENDENCIES
import { IsNotEmpty, IsISO8601, IsPhoneNumber, IsEmail } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsISO8601()
  date_of_birth: Date;

  @IsNotEmpty()
  address: string;

  @IsPhoneNumber('BR')
  phone: string;

  @IsEmail()
  email: string;
}
