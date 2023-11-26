import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartingPage from "./pages/StartingPage";
import HomePage from "./pages/HomePage";
import Trending from "./pages/Trending";
const App = () => {
  return (
    <div className="overflow-x-hidden scroll-m-0">
      <Router>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
