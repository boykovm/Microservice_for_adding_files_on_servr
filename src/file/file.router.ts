import express, { Router } from 'express';

import { addFile, getFilesInfo } from './file.controller';
import { isAdmin, upload } from './file.middleware';

const fileRoutes: Router = express.Router();

fileRoutes.post('/:userId', isAdmin, upload.single('file'), addFile);
fileRoutes.get('/:userId', isAdmin, getFilesInfo);

export default fileRoutes;