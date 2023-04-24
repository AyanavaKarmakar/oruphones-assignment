import { Router } from "express";
import {
  getMaleUsersWithExpensivePhones,
  getUsersWithLastNameAndQuote,
  getUsersWithLowIncomeAndCars,
  getUsersWithLuxuryCarAndNoDigitEmail,
} from "../controllers/user";

const router = Router();

router.get("/low-income-cars", getUsersWithLowIncomeAndCars);
router.get("/male-expensive-phones", getMaleUsersWithExpensivePhones);
router.get("/last-name-quote", getUsersWithLastNameAndQuote);
router.get("/luxury-car-no-digit-email", getUsersWithLuxuryCarAndNoDigitEmail);

export const UserRoutes = router;
