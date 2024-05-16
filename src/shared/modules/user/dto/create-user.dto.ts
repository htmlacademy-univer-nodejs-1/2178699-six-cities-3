import { UserType } from '../../../types/index.js';
import { IsEmail, IsString, Length } from 'class-validator';
import { CreateUserMessages } from './create-user.messages.js';


export class CreateUserDto {
  @IsString({ message: CreateUserMessages.firstname.invalidFormat })
  @Length(1, 15, { message: CreateUserMessages.firstname.lengthField })
  public firstname: string;

  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email: string;

  @IsString({ message: CreateUserMessages.avatarPath.invalidFormat })
  public avatarPath: string;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessages.password.lengthField })
  public password: string;

  public type: UserType;
}
