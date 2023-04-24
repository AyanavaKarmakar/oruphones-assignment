import { Router } from "express";
import { getUsersWithLowIncomeAndCars } from "../controllers";

const router = Router();

router.get("/low-income-cars", getUsersWithLowIncomeAndCars);

export const UserRoutes = router;
