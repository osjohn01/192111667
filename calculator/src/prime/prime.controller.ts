import { Controller, Get } from '@nestjs/common';
import { PrimeNumberService } from './prime.service';

@Controller('numbers')
export class PrimeNumberController {
  constructor(private readonly primeNumberService: PrimeNumberService) {}

  @Get('p')
  async getNumbersWithAverage() {
    return await this.primeNumberService.getNumbersWithAverage();
  }
}
