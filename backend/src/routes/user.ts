import { Router } from "express";
import {
  getMaleUsersWithExpensivePhones,
  getUsersWithLastNameAndQuote,
  getUsersWithLowIncomeAndCars,
} from "../controllers/user";

const router = Router();

router.get("/low-income-cars", getUsersWithLowIncomeAndCars);
router.get("/male-expensive-phones", getMaleUsersWithExpensivePhones);
router.get("/last-name-quote", getUsersWithLastNameAndQuote);

export const UserRoutes = router;
