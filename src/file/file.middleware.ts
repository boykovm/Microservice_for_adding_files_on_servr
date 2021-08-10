import multer from 'multer';
import { Request } from 'express';
import dateFormat from 'dateformat';

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
