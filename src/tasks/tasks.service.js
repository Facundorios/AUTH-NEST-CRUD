import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
    getTasks() {
        return [
            {
                id: 1,
                title: 'Task 1',
                description: 'Task 1 Description'
            },
            {
                id: 2,
                title: 'Task 2',
                description: 'Task 2 Description'
            },
            {
                id: 3,
                title: 'Task 3',
                description: 'Task 3 Description'
            }
        ]
    }
}