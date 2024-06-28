import { Module, Global } from '@nestjs/common';
import { ServiceAccount, initializeApp } from 'firebase-admin/app';
import { ConfigService } from '@nestjs/config';
import { FirebaseProvider } from './firebase.enum';
import snakecaseKeys from 'snakecase-keys';
import { ConfigKeys } from '@configs';
import { credential } from 'firebase-admin';
import { FirebaseService } from './firebase.service';

@Global()
@Module({
  providers: [
    {
      provide: FirebaseProvider.FIREBASE_APP,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return initializeApp({
          credential: credential.cert(
            snakecaseKeys(configService.get(ConfigKeys.FIREBASE), {
              deep: true,
            }) as ServiceAccount,
          ),
        });
      },
    },
    FirebaseService
  ],
  exports: [FirebaseService],
})
export class FirebaseModule {}
