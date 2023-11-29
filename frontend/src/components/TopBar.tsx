import { Link } from "react-router-dom";
import { FaSearch, FaRegBell, FaRegUser } from "react-icons/fa";
const TopBar = () => {
  return (
    <div className="text-white text-3xl flex justify-between">
      <div className="">
        <ul className="flex gap-4">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/documentaries">Documentaries</Link>
          </li>
        </ul>
      </div>
      <div className="flex mr-10 items-center gap-4">
        <FaSearch />
        <FaRegBell />
        <button>
          <Link to="/userprofile">
            <FaRegUser />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
