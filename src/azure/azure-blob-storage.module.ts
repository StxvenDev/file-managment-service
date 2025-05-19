
import { Module } from '@nestjs/common';
import { BlobStorageService } from './azure-blob-storage.service';


@Module({
  controllers: [],
  providers: [BlobStorageService],
  exports: [BlobStorageService],
})
export class BlobStorageModule {}
