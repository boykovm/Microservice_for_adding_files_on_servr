import express, { Router } from 'express';

import { addFile, getFilesInfo, isAdmin } from './file.controller';
import { upload } from './file.middleware';

const fileRoutes: Router = express.Router();

fileRoutes.post('/:userId', isAdmin, upload.single('file'), addFile);
fileRoutes.get('/:userId', isAdmin, getFilesInfo);

export default fileRoutes;