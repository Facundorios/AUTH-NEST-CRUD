import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  private tasks = []

  getTasks() {
    return this.tasks;
  }

  createTask(task: any) {
    this.tasks.push(task)
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
