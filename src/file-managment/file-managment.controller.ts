import { Controller, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FileManagmentService } from './file-managment.service';
import { UploadFilesDto } from './dto/create-file-managment.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class FileManagmentController {
  constructor(private readonly fileManagmentService: FileManagmentService) {}

  @MessagePattern('upload-files')
  uploadFiles(@Payload() createFileManagmentDto: UploadFilesDto) {
    return this.fileManagmentService.uploadFile(createFileManagmentDto);
  }

}
