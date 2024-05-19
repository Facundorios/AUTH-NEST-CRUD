import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return [
      {
        id: 1,
        title: 'Task 1',
        description: 'Task 1 description',
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Task 2 description',
      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Task 3 description',
      },
    ];
  }

  createTask() {
    return {
      id: 4,
      title: 'Task 4',
      description: 'Task 4 description',
    };
  }

  updateTask() {
    return 'Task updated'
  }

  deleteTask() {
    return 'Task deleted';
  }

  patchTask() {
    return 'Task p'
  }
}
