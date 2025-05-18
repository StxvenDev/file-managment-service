import { Module } from '@nestjs/common';
import { FileManagmentService } from './file-managment.service';
import { FileManagmentController } from './file-managment.controller';

@Module({
  controllers: [FileManagmentController],
  providers: [FileManagmentService],
})
export class FileManagmentModule {}
