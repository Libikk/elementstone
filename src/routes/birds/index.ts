import { Router, Request, Response } from "express";
import { sortAlphabetically } from "../../helpers";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const data:Bird[] = await import('../../../public/data.json');
  res.json(data.sort(sortAlphabetically))
});

export default router;
