import { Router } from "express";
import {
  getMaleUsersWithExpensivePhones,
  getUsersWithLowIncomeAndCars,
} from "../controllers";

const router = Router();

router.get("/low-income-cars", getUsersWithLowIncomeAndCars);
router.get("/male-expensive-phones", getMaleUsersWithExpensivePhones);

export const UserRoutes = router;
