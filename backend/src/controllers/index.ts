import type { Request, Response } from "express";
import { User } from "../models/user";

export const getUsersWithLowIncomeAndCars = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.find({
      income: { $lt: "$5" },
      car: { $in: ["BMW", "Mercedes"] },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const getMaleUsersWithExpensivePhones = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.find({
      gender: "Male",
      phone_price: { $gt: 10000 },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};
