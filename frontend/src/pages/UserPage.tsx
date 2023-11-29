import React, { useState, ChangeEvent, FormEvent } from "react";
import bg from "../assets/triangles.png";
import logo from "../assets/logo.png";
import { Typography, Input, Button } from "@material-tailwind/react";

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
}

const UserPage: React.FC = () => {
  const bgStyle = {
    background: `linear-gradient(rgba(97, 0, 194, 0.9), rgba(25, 24, 23, 0.9)), url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
  };

  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formState.password !== formState.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Form State:", formState);
    // Add your logic to submit the form data or perform any other action
  };

  return (
    <div style={bgStyle} className="flex flex-col items-center">
      <div className="p-5">
        <img src={logo} alt="" />
      </div>
      <div className="h-[80vh] w-[80vw] mt-10 flex flex-col items-center bg-black rounded-lg p-8">
        <div className="text-purple-500">
          <Typography variant="h3" color="white">
            Edit Profile
          </Typography>
        </div>
        <hr className="w-full border-t border-purple-500 my-4" />
        <div className="flex h-full w-[50vw] justify-center mt-10 pt-20 pl-20">
          <div className="profile-img h-[60px] w-[60px] bg-gray-400 rounded-full"></div>
          <div className="fields ml-4 flex h-1/2 w-full">
            <div className="name  flex">
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 flex-col w-[30rem]"
              >
                <Input
                  crossOrigin={"anonymous"}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="mb-4 text-white text-lg focus:text-white focus:text-lg"
                  value={formState.email}
                  onChange={handleChange}
                />
                <Input
                  crossOrigin={"anonymous"}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="mb-4 text-white text-lg focus:text-white focus:text-lg"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Input
                  crossOrigin={"anonymous"}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="mb-4 text-white text-lg focus:text-white focus:text-lg"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  color="pink"
                  className="rounded-lg py-3 px-6 mt-4 font-sans text-lg font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Proceed
                </Button>
              </form>
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-purple-500 my-4" />
      </div>
    </div>
  );
};

export default UserPage;
