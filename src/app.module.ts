import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module'
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule],
  providers: [UsersService]
})
export class AppModule {}
