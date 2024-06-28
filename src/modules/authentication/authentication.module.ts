import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { FirebaseModule } from '@modules';
import { RepositoryModule } from '@repositories';

@Module({
  imports: [FirebaseModule, RepositoryModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
