import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class SignInDto {
    @ApiProperty({
      name: 'email',
      example: 'test@example.com',
      description: 'This is a required property',
      required: true,
    })
    @IsEmail()
    email: string;
  
    @ApiProperty({
      name: 'authToken',
      example: '',
      description: 'This is a optional property',
      required: false,
    })
    @IsString()
    @IsNotEmpty()
    authToken: string;
  }