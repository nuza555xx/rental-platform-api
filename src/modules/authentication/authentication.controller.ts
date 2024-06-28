import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from '@guards';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('sign-in')
  @Public()
  signIn(@Body() body: SignInDto) {
    return this.authenticationService.signIn(body);
  }

  @Post('sign-up')
  @Public()
  signUp(@Body() body: SignUpDto) {
    return this.authenticationService.signIn(body);
  }
}
