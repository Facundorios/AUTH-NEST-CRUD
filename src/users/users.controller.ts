import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({})
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.userService.getUsers()
  }

  @Post('/users')
  createUser() {
    return this.userService.createUser()
  }
  @Put('/users')
  updateUser() {
    return this.userService.updateUser()
  }

  @Delete('/users')
  deleteUser() {
    return this.userService.deleteUser()
  }

  @Patch('/users')
  patchUser() {
    return this.userService.patchUser()
  }
}
