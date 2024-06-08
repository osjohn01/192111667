import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FiboNumberService {
  private previousState: number[] = [];

  async fetchNumbers(): Promise<number[]> {
    const response = await axios.get('http://20.244.56.144/test/fibo', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI2OTcyLCJpYXQiOjE3MTc4MjY2NzIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjAxMGE4ZDNiLWM0NzgtNGQ2YS1hNGE2LTQxYTFmNjZiOTk0YyIsInN1YiI6Im9zam9objAxQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6Im9zam9obiIsImNsaWVudElEIjoiMDEwYThkM2ItYzQ3OC00ZDZhLWE0YTYtNDFhMWY2NmI5OTRjIiwiY2xpZW50U2VjcmV0IjoiTkNMRGlsYVpqeWd4WkxaZyIsIm93bmVyTmFtZSI6Ik9iZWQgSm9obiIsIm93bmVyRW1haWwiOiJvc2pvaG4wMUBnbWFpbC5jb20iLCJyb2xsTm8iOiIxOTIxMTE2NjcifQ.QIUuDcJDQ0VJlgAkkMuiz2wc7mcplq8QhZ9VvLyeLVg'
        },
  });
    return response.data.numbers;
  }

  calculateAverage(numbers: number[]): number {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
  }

  async getNumbersWithAverage() {
    const currentState = await this.fetchNumbers();
    const avg = this.calculateAverage(currentState);

    const response = {
      numbers: currentState,
      windowPrevState: this.previousState,
      windowCurrState: currentState,
      avg: avg,
    };

    this.previousState = currentState;
    return response;
  }
}
