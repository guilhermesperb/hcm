import { Request, Response } from 'express';
import { HttpRequest } from '../protocols/http/http';
import { Controller } from '../protocols/controller/controller';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      header: {
        authorization: '',
      },
      body: req.body
    };

    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};