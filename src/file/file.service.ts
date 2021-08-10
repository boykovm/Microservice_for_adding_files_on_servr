import { Request } from 'express';

import { fileModel } from './file.model';

export const createFile = async (req: Request) => {
  return await fileModel.create({
      name: req.file?.filename,
      path: req.file?.destination
    });
};