import type { Request, Response, NextFunction } from "express";
import { rateLimit } from "express-rate-limit";

export const limiter =
  process.env.NODE_ENV === "development"
    ? (req: Request, res: Response, next: NextFunction) => {
        // Pass through the middleware without rate limiting in dev mode
        next();
      }
    : rateLimit({
        // 15 minutes
        windowMs: 15 * 60 * 1000,

        // limit each IP to 100 requests per windowMs
        max: 100,

        message:
          "Too many requests from this IP, please try again after 15 minutes",
      });
