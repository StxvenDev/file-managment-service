import { Module } from '@nestjs/common';
import { FileManagmentModule } from './file-managment/file-managment.module';

@Module({
  imports: [FileManagmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
