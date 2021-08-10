import multer from 'multer';
import { Request, Response } from 'express';
import dateFormat from 'dateformat';
import axios from 'axios';
import { RoleMicroseviceConstants } from '../shared/constants';

const storage = multer.diskStorage({
// @ts-ignore
  destination: (req: Request, file: File, next) => {
    next(null, 'files');
  },
// @ts-ignore
  filename: (req: Request, file: File, next) => {
    const date = new Date();
    const now = Date.now();
    // @ts-ignore
    next(null, now + '-' + dateFormat(date, 'yyyymmdd_HMMssl') + file.originalname);
  }
});

export const upload = multer({ storage });

export const isAdmin = async (req: Request, res: Response, next: any) => {
  try {
    const data = await axios.get(`http://${RoleMicroseviceConstants.HOSTNAME}:${RoleMicroseviceConstants.PORT}/user/role/${req.params.userId}`);
    if (data.data.name !== 'admin') {
      return res.sendStatus(403);
    }
    return next();
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};
