import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TaskController {

    @Get('tareas')
  
    getAllTasks() {
    return 'obteniendo todas las tareas..';
  }


}
