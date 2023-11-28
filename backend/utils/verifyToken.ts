import { errorHandler } from "./errorHandler";
import jwt from "jsonwebtoken";

export const verifyToken = (req: any, res: any, next: any) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized"));
  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {
      if (err) return next(errorHandler(401, "Unauthorized"));
      req.user = decoded;
      next();
    }
  );
};
