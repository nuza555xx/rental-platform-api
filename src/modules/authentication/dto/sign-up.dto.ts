import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class SignUpDto {
    @ApiProperty({
      name: 'email',
      example: 'test@example.com',
      description: 'This is a required property',
      required: true,
    })
    @IsEmail()
    email: string;
  
    @ApiProperty({
      name: 'displayName',
      example: 'test@example.com',
      description: 'This is a required property',
      required: true,
    })
    @IsString()
    @IsNotEmpty()
    displayName: string;
  
    @ApiProperty({
      name: 'socialId',
      example: '1234567890',
      description: 'This is a required property',
      required: true,
    })
    @IsString()
    @IsNotEmpty()
    socialId: string;
  
    @ApiProperty({
      name: 'authToken',
      example: '',
      description: 'This is a optional property',
      required: false,
    })
    @IsString()
    @IsNotEmpty()
    authToken: string;
  
    @ApiProperty({
      name: 'image',
      example: '',
      description: 'This is a optional property',
      required: false,
    })
    @IsString()
    @IsNotEmpty()
    image: string;
  }