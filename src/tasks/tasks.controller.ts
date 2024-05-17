import { Controller, Get } from '@nestjs/common';
import { TasksSservice }
@Controller({})
export class TaskController {
  

  constructor(taskService: ) {

  }

  @Get('/tasks')
  getAllTasks() {}
}
