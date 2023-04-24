import type { Request, Response } from "express";
import { User } from "../models/user";

export const getTop10CitiesWithHighestUserCountAndAverageIncome = async (
  req: Request,
  res: Response
) => {
  try {
    const topCities = await User.aggregate([
      {
        $project: {
          city: 1,
          income: {
            $toDouble: {
              $substrBytes: [
                "$income",
                { $add: [{ $indexOfBytes: ["$income", "."] }, -1] },
                { $add: [-1, { $indexOfBytes: ["$income", "."] }] },
              ],
            },
          },
        },
      },
      {
        $group: {
          _id: "$city",
          userCount: { $sum: 1 },
          avgIncome: { $avg: "$income" },
        },
      },
      {
        $project: {
          _id: 1,
          userCount: 1,
          avgIncome: { $round: ["$avgIncome", 2] },
        },
      },
      { $sort: { userCount: -1 } },
      { $limit: 10 },
    ]);

    res.status(200).json(topCities);
  } catch (error) {
    console.error("Error fetching top cities:", error);
    res.status(500).json({ message: "Error fetching top cities", error });
  }
};
