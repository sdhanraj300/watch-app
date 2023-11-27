import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import bgImg from "../assets/triangles.png";
import HeroHome from "../components/HeroHome";
import TrendingCard from "../components/TrendingCard";
import ContinueWatching from "../components/ContinueWatchingCard";
import { useSelector } from "react-redux";
import { Movie } from "../utils/constants";
const HomePage: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    background: `linear-gradient(rgba(97, 0, 194, 0.9), rgba(25, 24, 23, 0.9)), url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
  };
  const movies = useSelector(
    (state: { movies: { allMovies: Movie[] } }) => state.movies.allMovies
  );
  return (
    <div className="flex">
      <div
        style={{
          backgroundColor: "#21201E",
          boxShadow: "2px 0px 90px 0px rgba(97, 0, 194, 0.4)",
        }}
        className="h-screen hidden fixed xsm:block xsm:w-1/3 md:w-1/4 sm:1/3 lg:w-1/5"
      >
        <SideBar />
      </div>
      <div className="flex flex-col xsm:ml-[19vw]">
        <div className="text-xl flex flex-col" style={backgroundStyle}>
          <div
            style={{
              boxShadow: "0px 2px 90px 0px rgba(97, 0, 194, 0.4)",
            }}
            className="h-[8vh] mt-2 pl-10 pt-5"
          >
            <TopBar />
          </div>
          <div className="">
            <HeroHome />
          </div>
        </div>
        <div className="bg-black flex flex-col gap-8 overflow-y-hidden">
          <div className="flex flex-col ml-10 gap-4 trending text-white mt-10">
            <span className="font-bold text-xl">Trending</span>
            <div className="flex xsm:flex-row flex-col gap-2 flex-wrap">
              {movies.map((movie: Movie) => (
                <TrendingCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 trending ml-10 text-white mt-10">
            <span className="font-bold text-xl">Continue Watching</span>
            <div className="flex xsm:flex-row flex-col gap-2 flex-wrap">
              {movies.map((movie: Movie) => (
                <ContinueWatching movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
