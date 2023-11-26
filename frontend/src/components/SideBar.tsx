import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMdTrendingUp } from "react-icons/io";
import { FaFilm, FaRegHeart, FaRegCalendarAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdLogout } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="text-white flex flex-col gap-8 sm:w-[20vw]">
      <div className="mt-8 ml-4">
        <Link to="/home">
          <img src={logo} alt="" className="w-30 h-30 object-contain" />
        </Link>
      </div>
      <div className="flex flex-col gap-60 ml-4">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              className="flex items-center gap-4 hover:text-gray-300"
              to="/home"
            >
              <FaFilm className="text-xl" />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4 hover:text-gray-300"
              to="/favorites"
            >
              <FaRegHeart className="text-xl" />
              <p>Favorites</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4 hover:text-gray-300"
              to="/trending"
            >
              <IoMdTrendingUp className="text-xl" />
              <p>Trending</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4 hover:text-gray-300"
              to="/comingsoon"
            >
              <FaRegCalendarAlt className="text-xl" />
              <p>Coming Soon</p>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <Link
              className="flex items-center gap-4 hover:text-gray-300"
              to="/community"
            >
              <IoPeople className="text-xl" />
              <p>Community</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4 hover:text-gray-300"
              to="/social"
            >
              <BsChat className="text-xl" />
              <p>Social</p>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>
            <Link
              className="flex items-center gap-4 hover:text-gray-300"
              to="/settings"
            >
              <GiSettingsKnobs className="text-xl" />
              <p>Settings</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4 hover:text-gray-300"
              to="/logout"
            >
              <MdLogout className="text-xl" />
              <p>Logout</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
