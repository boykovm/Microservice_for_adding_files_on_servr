import { config } from 'dotenv';

export enum Constants {
  HOSTNAME = '127.0.0.1',
  PORT = 3001,
}

config({ path: './.env'});

export const URI: string = process.env.URI || '';

export enum RoleMicroseviceConstants {
  HOSTNAME = 'localhost',
  PORT = 3000,
}