import { Module } from '@nestjs/common';
import { ConfigurationModule } from '@configs';
import { JwtModule, RateLimitModule } from '@modules';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionFilter } from '@exception';
import { LoggingInterceptor, ResponseInterceptor } from '@interceptor';
import { AppController } from './app.controller';
import { AuthGuard, RateLimitGuard } from '@guards';
import { AuthenticationModule } from './modules/authentication/authentication.module';

@Module({
  imports: [
    ConfigurationModule,
    JwtModule,
    RateLimitModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RateLimitGuard,
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
