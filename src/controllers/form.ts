import formService from '@/services/form';
import type { NextFunction, Request, Response, Router } from 'express';

export default async function (router: Router) {

  router.get('/form', async (req: Request, res: Response) => {

    const forms = await formService.getForms();

    res.status(200).json({
      success: true,
      data: {
        forms
      }
    });

  })

  router.get('/form/:id', async (req: Request, res: Response) => {

    const form = await formService.getForm(req.params.id);

    res.status(200).json({
      success: true,
      data: {
        form
      }
    });

  })

  router.post('/form', async (req: Request, res: Response, next: NextFunction) => {

    try {
      
      const form = await formService.createForm(req.body);

      res.status(200).json({
        success: true,
        data: {
          form
        }
      });

    } catch (err: any) {

      next (err)

    }

  })

}

