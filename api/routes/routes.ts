import { Router } from 'express';
import { makeClockingController } from '../factories/clocking';
import { adaptRoute } from '../config/express-route-adapter';

export default (router: Router): void => {
  router.post(
    '/clocking-register',
    adaptRoute(makeClockingController()),
  );
};