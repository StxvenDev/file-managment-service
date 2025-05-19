import { Controller, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FileManagmentService } from './file-managment.service';
import { CreateFileManagmentDto } from './dto/create-file-managment.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class FileManagmentController {
  constructor(private readonly fileManagmentService: FileManagmentService) {}

  @MessagePattern('upload-files')
  @UseInterceptors(FilesInterceptor('files', 10))
  uploadFiles(@Payload() createFileManagmentDto: CreateFileManagmentDto) {
    return this.fileManagmentService.uploadFile(createFileManagmentDto);
  }

}
