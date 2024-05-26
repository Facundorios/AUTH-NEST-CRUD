import {
  Controller,
  Get,
  HttpCode,
  Req,
  Res,
  Param,
  ParseIntPipe,
  ParseBoolPipe,
  Query,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller()
export class HelloController {
  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'Hello World',
    });
  }
  @Get('new')
  @HttpCode(201)
  new() {
    return 'This action adds a new cat';
  }

  @Get('notfound')
  @HttpCode(404)
  notFound() {
    return 'This action returns a not found response';
  }

  @Get('error')
  @HttpCode(500)
  error() {
    return 'This action returns an error response';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    console.log(typeof num);
    return `This action returns a #${num + 1} ticket`;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return 'oaa';
  }

  @Get('greet')
  // greet(@Query() query: {name: string, age: number}) {
  //   console.log(typeof query.age);
  //   console.log(typeof query.name);
  //   return `Hello ${query.name}, you are ${query.age} years old`;
  // }
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    console.log(typeof query.age);
    console.log(typeof query.name);
    return `Hello ${query.name}, you are ${query.age} years old, and in the next year you're going to be ${query.age + 1} years old.`;
  }
}
