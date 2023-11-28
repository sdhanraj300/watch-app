import { Response } from "express";
import jwt from "jsonwebtoken";

interface GenerateTokenProps {
  id: string;
}

const generateToken = (res: Response, { id }: GenerateTokenProps) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
