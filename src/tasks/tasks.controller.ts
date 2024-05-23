import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() task: any) {
    console.log(task);
    return this.taskService.createTask(task);
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
