import { Controller, Get } from '@nestjs/common';
import { RandomNumberService } from './random.service';

@Controller('numbers')
export class RandomNumberController {
  constructor(private readonly randomNumberService: RandomNumberService) {}

  @Get('r')
  async getNumbersWithAverage() {
    return await this.randomNumberService.getNumbersWithAverage();
  }
}
