import { Module } from '@nestjs/common';
import { FileManagmentService } from './file-managment.service';
import { FileManagmentController } from './file-managment.controller';
import { BlobStorageModule } from '../azure/azure-blob-storage.module';

@Module({
  controllers: [FileManagmentController],
  providers: [FileManagmentService],
  imports: [BlobStorageModule],
})
export class FileManagmentModule {}
