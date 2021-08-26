import { Request, Response } from 'express';
import yearGroupService from '../../domain/services/yearGroup.service';
import { RECORD_NOT_FOUND_MESSAGE } from '../../shared/utils/constants';
import { transformYearGroupResponse } from '../../domain/responses/yearGroup.response';

const getAll = async (_req: Request, res: Response) => {
  const result = await yearGroupService.findAll();

  return res.json({ data: transformYearGroupResponse(result) });
};

const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await yearGroupService.findById(id);

  if (!item) {
    return res.status(404).json({ message: RECORD_NOT_FOUND_MESSAGE('YearGroup', id) });
  }

  return res.json({ data: transformYearGroupResponse(item) });
};

export { getAll, getOne };