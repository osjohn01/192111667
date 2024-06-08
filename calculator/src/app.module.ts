import { Module } from '@nestjs/common';
import { PrimeNumberModule } from './prime/prime.module';
import { FiboNumberModule } from './fibonacci/fibo.module';
import { EvenNumberModule } from './even/even.module';
import { RandomNumberModule } from './random/random.module';

@Module({
  imports: [
    PrimeNumberModule,
    FiboNumberModule,
    EvenNumberModule,
    RandomNumberModule
  ],
})
export class AppModule {}
