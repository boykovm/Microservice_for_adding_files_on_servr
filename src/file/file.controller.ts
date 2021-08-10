import { Request, Response } from 'express';
import axios from 'axios';

import { fileModel } from './file.model';

export const addFile = async (req: Request, res: Response) => {
  try {
    const file = await fileModel.create({
      name: req.file?.filename,
      path: req.file?.destination
    });
    file.save();
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const isAdmin = async (req: Request, res: Response, next: any) => {
  try {
    const data = await axios.get(`http://localhost:3000/user/role/${req.params.userId}`);
    if (data.data.name !== 'admin') {
      return res.sendStatus(403);
    }
    return next();
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const getFilesInfo = async (req: Request, res: Response) => {
  try {
    const {
      skip
    } = req.body;
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