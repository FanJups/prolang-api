import { Router } from 'express';

import * as languageController from '../controllers/language.controller';
import { generateRoutePrefix } from '../../shared/utils/helpers';

const languageRoute = () => {
  const [publicPrefix, privatePrefix] = generateRoutePrefix('languages');
  const router = Router();

  router.get(`${publicPrefix}`, languageController.search);

  router.get(`${publicPrefix}/all`, languageController.getAll);

  router.get(`${publicPrefix}/:idOrName`, languageController.getByIdOrName);

  router.get(`${publicPrefix}/years-groups/:name`, languageController.getByYearGroup);

  router.post(`${privatePrefix}`, languageController.create);

  router.put(`${privatePrefix}/:id`, languageController.update);

  return router;
};

export { languageRoute };
