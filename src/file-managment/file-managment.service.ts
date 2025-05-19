import { Injectable } from '@nestjs/common';
import { CreateFileManagmentDto } from './dto/create-file-managment.dto';

@Injectable()
export class FileManagmentService {
  uploadFile(createFileManagmentDto: CreateFileManagmentDto) {
    return 'This action adds a new fileManagment';
  }
}
