import { Router } from "express";
import { getTop10CitiesWithHighestUserCountAndAverageIncome } from "../controllers/city";

const router = Router();

router.get(
  "/top-10-cities",
  getTop10CitiesWithHighestUserCountAndAverageIncome
);

export const CityRoutes = router;
