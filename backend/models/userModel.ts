import mongoose, { Document } from "mongoose";
export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  favoriteMovies: Array<mongoose.Types.ObjectId | string>;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dxk0bmtei/image/upload/v1620826219/avatar/avatar-1_zjxq9c.png",
    },
    favoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<UserDocument>("User", userSchema);
export default User;
