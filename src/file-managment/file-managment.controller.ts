import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FileManagmentService } from './file-managment.service';
import { CreateFileManagmentDto } from './dto/create-file-managment.dto';
import { UpdateFileManagmentDto } from './dto/update-file-managment.dto';

@Controller()
export class FileManagmentController {
  constructor(private readonly fileManagmentService: FileManagmentService) {}

  @MessagePattern('createFileManagment')
  create(@Payload() createFileManagmentDto: CreateFileManagmentDto) {
    return this.fileManagmentService.create(createFileManagmentDto);
  }

  @MessagePattern('findAllFileManagment')
  findAll() {
    return this.fileManagmentService.findAll();
  }

  @MessagePattern('findOneFileManagment')
  findOne(@Payload() id: number) {
    return this.fileManagmentService.findOne(id);
  }

  @MessagePattern('updateFileManagment')
  update(@Payload() updateFileManagmentDto: UpdateFileManagmentDto) {
    return this.fileManagmentService.update(updateFileManagmentDto.id, updateFileManagmentDto);
  }

  @MessagePattern('removeFileManagment')
  remove(@Payload() id: number) {
    return this.fileManagmentService.remove(id);
  }
}
