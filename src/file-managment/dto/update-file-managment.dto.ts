import { PartialType } from '@nestjs/mapped-types';
import { CreateFileManagmentDto } from './create-file-managment.dto';

export class UpdateFileManagmentDto extends PartialType(CreateFileManagmentDto) {
  id: number;
}
