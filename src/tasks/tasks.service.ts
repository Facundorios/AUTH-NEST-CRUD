import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    //buscamos en tasks cada task, en donde si hay algun task con la propiedad id que coincida con el id del parametro de la funcion, devuelve esa tarea.
    const foundTask = this.tasks.find((task) => task.id === id);

    if(!foundTask) {
      return new NotFoundException('no existe esa tarea')
    }

    return foundTask

  }

  createTask(task: any) {
    this.tasks.push({
      ...task,
      id: this.tasks.length,
    });
    return task;
  }

  updateTask() {
    return 'Task updated';
  }

  deleteTask() {
    return 'Task deleted';
  }

  patchTask() {
    return 'Task p';
  }
}
