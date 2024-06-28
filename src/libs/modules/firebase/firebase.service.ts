import { Injectable } from '@nestjs/common';
import { auth } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  verifyIdToken(token: string) {
    return auth().verifyIdToken(token);
  }
}
