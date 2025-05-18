import { Injectable } from '@nestjs/common';
import { CreateFileManagmentDto } from './dto/create-file-managment.dto';
import { UpdateFileManagmentDto } from './dto/update-file-managment.dto';

@Injectable()
export class FileManagmentService {
  create(createFileManagmentDto: CreateFileManagmentDto) {
    return 'This action adds a new fileManagment';
  }

  findAll() {
    return `This action returns all fileManagment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileManagment`;
  }

  update(id: number, updateFileManagmentDto: UpdateFileManagmentDto) {
    return `This action updates a #${id} fileManagment`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileManagment`;
  }
}
