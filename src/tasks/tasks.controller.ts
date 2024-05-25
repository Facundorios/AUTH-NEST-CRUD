import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Patch,
  Body,
  Query,
  Param,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    //console.log(query);
    return this.taskService.getTasks();
  }
  //Al decorador Get le pasamos como prametro '/:id', que se concatena con el 'tasks' del Decorador Controller. 
  @Get('/:id')
  getTask(@Param('id') id: string) {
    //Con el decorador Param, definimos id (como esta definido en el Get) como un string
    //console.log(id)
    return this.taskService.getTask(parseInt(id))
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    console.log(task);
    return this.taskService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(task);
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
