// src/blob/blob-storage.service.ts

import {
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from '@azure/storage-blob';
import { envs } from 'src/config';
import { RpcException } from '@nestjs/microservices';

import {v4 as uuid} from 'uuid';

@Injectable()
export class BlobStorageService {
  private blobServiceClient: BlobServiceClient;
  private containerName: string;

  constructor() {
    const account = envs.azureStorageAccount;
    const accountKey = envs.azureStorageAccessKey;
    this.containerName = envs.azureContainerName;

    const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
    this.blobServiceClient = new BlobServiceClient(
      `https://${account}.blob.core.windows.net`,
      sharedKeyCredential,
    );
  }
  
  async uploadFile(file: any): Promise<string> {
    const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
    try {
      const fileId = uuid();
      const blockBlobClient = containerClient.getBlockBlobClient(fileId);
      const buffer = Buffer.from(file.content, 'base64');
      await blockBlobClient.uploadData(buffer, {
        blobHTTPHeaders: { blobContentType: file.type },
      });
      return `${blockBlobClient.url}&${envs.azureToken}`;
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error uploading file to Azure Blob Storage',
      });
    }
  }
}
