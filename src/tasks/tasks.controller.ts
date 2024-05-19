import { Controller, Get, Put, Post, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask() {
    return this.taskService.createTask();
  }

  @Put()
  updateTask() {
    return this.taskService.updateTask();
  }

  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch()
  patchTask() {
    return this.taskService.patchTask();
  }
  
}
