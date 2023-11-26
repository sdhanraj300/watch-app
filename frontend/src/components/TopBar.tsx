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
        <div className="flex items-center gap-2 rounded-md bg-purple-700 p-2">
          <FaRegUser />
          <p>Pookie Bear</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
