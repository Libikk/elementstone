import { Router, Request, Response } from "express";

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
  const data = require('../../../public/data.json'); // todo import es6

  res.json(data.sort(sortAlphabetically))
});

export default router;
