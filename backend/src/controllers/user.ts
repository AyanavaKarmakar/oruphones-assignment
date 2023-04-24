import type { Request, Response } from "express";
import { type IUser, User } from "../models/user";

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

export const getUsersWithLastNameAndQuote = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.find({
      last_name: { $regex: /^M/ },
      quote: { $regex: /^.{16,}/ },
    });

    const filteredUsers = users.filter((user: IUser) =>
      user.email.includes(user.last_name)
    );
    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const getUsersWithLuxuryCarAndNoDigitEmail = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.find({
      car_brand: { $in: ["BMW", "Mercedes", "Audi"] },
      email: { $not: /\d/ },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", error });
  }
};
