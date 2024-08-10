import { Request, Response, NextFunction } from "express";

import app from "@/app";

class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;

    app.server.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
          return res.status(err.statusCode).json({
            status: "error",
            message: err.message
          });
        }

        return res.status(500).json({
          status: "error",
          message: "Internal server error"
        });
      }
    );
  }
}

export { AppError };
