import bcryptjs from "bcryptjs";
import User, { UserDocument } from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { userName, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 12);
  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user.toObject()); // Use toObject to get a plain JavaScript object
  } catch (error) {
    next(error);
  }
};

export const signin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User does not exist!");

    const isMatch = bcryptjs.compareSync(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials!");

    const token = jwt.sign({ id: user._id }, "thisisasupersecretkey");
    res.cookie("access_token", token, { httpOnly: true });

    // Convert to plain JavaScript object
    const userObject = user.toObject();

    // Remove sensitive information before sending the response
    const { password: pass, ...rest } = userObject as UserDocument;
    
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
