import { IsString, Length } from 'class-validator';

export class CreateUserRequest {
  @IsString()
  @Length(8, 11)
  name: string;

  @IsString()
  @Length(11, 11)
  phone: string;
}
