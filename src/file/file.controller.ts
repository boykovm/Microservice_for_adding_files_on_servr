import { Request, Response } from 'express';

import { fileModel } from './file.model';
import { createFile } from './file.service';

export const addFile = async (req: Request, res: Response) => {
  try {
    const file = await createFile(req);
    file.save();
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const getFilesInfo = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    let skip = parseInt(req.query.skip) || 0;
    const documentsCount = await fileModel.countDocuments();
    const files = await fileModel.find({})
      .skip(skip)
      .limit(10);
    res.send({
      files,
      skipped: skip,
      documentsCount,
    });
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};