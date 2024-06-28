import { FirebaseApp, FirebaseProvider, FirebaseService } from '@modules';
import { Inject, Injectable } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async signIn(body: SignInDto) {
    const verify = await this.firebaseService.verifyIdToken(body.authToken);
  }
}
