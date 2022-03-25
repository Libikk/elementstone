import { Router, Request, Response } from "express";
import birdsData from '../../../public/data.json';

// todo this could be moved to some helper file
const sortAlphabetically = (a, b) => {
  var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
  if (nameA < nameB) //sort string ascending
  return -1;
  if (nameA > nameB)
  return 1;
  return 0; //default return value (no sorting)
}

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.json(birdsData.sort(sortAlphabetically))
});

export default router;
