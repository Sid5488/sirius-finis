import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { AppError } from "@/errors/app-error";
import authConfig from "@/core/config/auth-config";

interface ITokenPayload {
  int: number;
  res: Response;
  email: string;
  subject: string;
}

export default (
  request: Request,
  _: Response,
  next: NextFunction
): void => {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("Authorization not foud", 401);

  const [, token] = authHeader.split(" ");

  if (token === undefined) throw new AppError("Token not found", 401);

  const decode = verify(token, authConfig.secret);
  const { subject, email } = decode as ITokenPayload;

  request.user = {
    id: subject,
    email
  };

  return next();
};