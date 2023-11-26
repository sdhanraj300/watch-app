import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartingPage from "./pages/StartingPage";
import HomePage from "./pages/HomePage";
import Trending from "./pages/Trending";
import Favorites from "./pages/Favorites";
const App = () => {
  return (
    <div className="overflow-x-hidden scroll-m-0">
      <Router>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
