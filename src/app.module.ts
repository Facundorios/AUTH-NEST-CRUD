import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module'
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { HelloController } from './hello/hello.controller';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, AdminModule, PaymentsModule],
  providers: [AdminService],
  controllers: [HelloController, AdminController]
})

export class AppModule {}
