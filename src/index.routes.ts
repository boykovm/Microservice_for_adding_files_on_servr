import { Router } from 'express';

import fileRoutes from './file/file.router';

const routes: Router = Router();

routes.use('/file', fileRoutes);

export default routes;