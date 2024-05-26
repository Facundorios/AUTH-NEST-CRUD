import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

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
  


}
