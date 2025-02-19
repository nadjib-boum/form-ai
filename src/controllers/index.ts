import FormController from '@/controllers/form';
import { Router } from 'express';

const router: Router = Router(); 

FormController(router);


export default router;