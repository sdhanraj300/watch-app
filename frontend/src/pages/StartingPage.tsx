import React from "react";
import bgImg from "../assets/bg_projector.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const StartingPage = () => {
  const backgroundStyle: React.CSSProperties = {
    background: `linear-gradient(rgba(97, 0, 194, 0.9), rgba(25, 24, 23, 0.9)), url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  };

  return (
    <div className="flex justify-center items-center" style={backgroundStyle}>
      <div className="text-white flex gap-2 flex-col ">
        <div className="flex flex-col items-center">
          <img src={logo} className="w-[131px] h-[32px]" alt="" />
          <p>Enjoy the Latest Movies</p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="w-[100%] h-[40px] text-md rounded-md bg-[#7900c2] hover:bg-[#6100C2]">
            <Link to="/login">Login</Link>
          </button>
          <p className="text-center">
            No Account?{" "}
            <span className="underline font-bold">
              <Link to="/signUp">Sign Up</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
