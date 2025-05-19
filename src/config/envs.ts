
import 'dotenv/config'
import * as joi from 'joi'

interface EnvVars {
  RABBITMQ_URL: string;
  AZURE_STORAGE_ACCOUNT: string;
  AZURE_STORAGE_ACCESS_KEY: string;
  AZURE_CONTAINER_NAME: string;
  AZURE_TOKEN: string;
}

const envSchema = joi.object({
  RABBITMQ_URL: joi.string().required(),
  AZURE_STORAGE_ACCOUNT: joi.string().required(),
  AZURE_STORAGE_ACCESS_KEY: joi.string().required(),
  AZURE_CONTAINER_NAME: joi.string().required(),
  AZURE_TOKEN: joi.string().required(),
}).unknown(true)


const {error, value} = envSchema.validate(process.env)

if(error) {
  throw new Error(`Config validation error: ${ error.message }`)
}

const envVars: EnvVars = value;

export const envs = {
  rabbitmqUrl: envVars.RABBITMQ_URL,
  azureStorageAccount: envVars.AZURE_STORAGE_ACCOUNT,
  azureStorageAccessKey: envVars.AZURE_STORAGE_ACCESS_KEY,
  azureContainerName: envVars.AZURE_CONTAINER_NAME,
  azureToken: envVars.AZURE_TOKEN,
}


