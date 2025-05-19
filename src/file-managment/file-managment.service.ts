import { Injectable } from '@nestjs/common';
import { UploadFilesDto } from './dto/create-file-managment.dto';
import { BlobStorageService } from 'src/azure/azure-blob-storage.service';

@Injectable()
export class FileManagmentService {
  constructor(
    private readonly blobStorageService: BlobStorageService, 
  ) {}

  async uploadFile(uploadFileDto: UploadFilesDto) {
    const urls = await Promise.all(uploadFileDto.files.map(async(file) => (
       await this.blobStorageService.uploadFile(file) // Llama al método de carga de archivos
    ))
  );
    return urls;
  }
}
