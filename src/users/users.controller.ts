import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';

@Controller({})
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('/users')
  createUser(@Body() user: createUserDto) {
    return this.userService.createUser(user);
  }
  // @Put('/users')
  // updateUser() {
  //   return this.userService.updateUser();
  // }

  // @Delete('/users')
  // deleteUser() {
  //   return this.userService.deleteUser();
  // }

  // @Patch('/users')
  // patchUser() {
  //   return this.userService.patchUser();
  // }
}

