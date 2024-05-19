import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
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

  createUser() {
    return 'User created successfully!';
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
