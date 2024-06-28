import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  appConfig,
  jwtConfig,
  mongooseConfig,
  rateLimitConfig,
} from './registers';
import { ConfigProvider } from './config.eum';
import { firebaseConfig } from './registers/firebase.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongooseConfig, appConfig, jwtConfig, rateLimitConfig, firebaseConfig],
    }),
  ],
  providers: [
    {
      provide: ConfigProvider.APP,
      useFactory: appConfig,
    },
    {
      provide: ConfigProvider.JWT,
      useFactory: jwtConfig,
    },
    {
      provide: ConfigProvider.MONGOOSE,
      useFactory: mongooseConfig,
    },
    {
      provide: ConfigProvider.RATE_LIMIT,
      useFactory: rateLimitConfig,
    },
    {
      provide: ConfigProvider.FIREBASE,
      useFactory: firebaseConfig,
    },
  ],
  exports: [
    ConfigProvider.APP,
    ConfigProvider.JWT,
    ConfigProvider.MONGOOSE,
    ConfigProvider.RATE_LIMIT,
    ConfigProvider.FIREBASE,
  ],
})
export class ConfigurationModule {}
