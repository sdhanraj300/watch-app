import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartingPage from "./pages/StartingPage";
import HomePage from "./pages/HomePage";
import Trending from "./pages/Trending";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
const App = () => {
  return (
    <div className="overflow-x-hidden scroll-m-0">
      <Router>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/userprofile" element={<UserPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
