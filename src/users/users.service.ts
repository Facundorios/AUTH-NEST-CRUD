import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
    },
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: createUserDto) {
    this.users.push(user)
    return {
      ...user,
      id: this.users.length + 1 
    }
  }

  updateUser() {
    return 'User updated successfully!';
  }

  deleteUser() {
    return 'User deleted successfully!';
  }

  patchUser() {
    return 'User patched successfully!';
  }

  
}
