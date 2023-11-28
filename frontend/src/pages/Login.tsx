import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Link } from "react-router-dom";
import bg from "../assets/triangles.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundColor: "#F5F5F5",
  };

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault(); 
    if (!formState.email || !formState.password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const res = await axios.post("api/auth/signin", formState);
      toast.success("Login successful");
      console.log(res.data);
    } catch (err: any) {
      toast.error(err.response.data.message);
      console.error(err);
    }
  };

  return (
    <div
      style={backgroundStyle}
      className="h-screen flex items-center justify-center "
    >
      <Card className="p-20 text-2xl text-black" shadow={false}>
        <Typography variant="h1" color="black">
          Login
        </Typography>
        <Typography color="black" className="mt-1 font-semibold text-xl">
          Nice to meet you! Enter your details to Login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h4" color="black" className="-mb-3">
              Your Email
            </Typography>
            <Input
              crossOrigin={"anonymous"}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-black-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            <Typography variant="h4" color="black" className="-mb-3">
              Password
            </Typography>
            <Input
              crossOrigin={"anonymous"}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-black-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Typography
            color="black"
            className="mt-4 text-center font-normal text-xl"
          >
            Don't have an account?{" "}
            <Link to="/signUp" className="font-medium black underline">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Login;
