import { Global, Module } from '@nestjs/common';
import { ModelDefinition } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schemas';
import { MongooseModule } from '@modules';

const modelDefinitions: ModelDefinition[] = [
  {
    name: Account.name,
    schema: AccountSchema,
  },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(modelDefinitions)],
})
export class RepositoryModule {}
