import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import TrendingBigCard from "../components/TrendingBigCard";
import TrendingCard from "../components/TrendingCard";
import { Movie } from "../utils/constants";
import { useSelector } from "react-redux";
import { useState } from "react";
const Trending = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleCardClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseClick = () => {
    setSelectedMovie(null);
  };
  const movies = useSelector(
    (state: { movies: { allMovies: Movie[] } }) => state.movies.allMovies
  );
  return (
    <div className="bg-black h-screen">
      <div
        style={{
          backgroundColor: "#21201E",
          boxShadow: "2px 0px 90px 0px rgba(97, 0, 194, 0.4)",
        }}
        className="h-screen hidden fixed xsm:block xsm:w-1/3 md:w-1/4 sm:1/3 lg:w-1/5"
      >
        <SideBar />
      </div>
      <div
        style={{
          boxShadow: "0px 2px 90px 0px rgba(97, 0, 194, 0.4)",
        }}
        className="h-[10vh] pl-10 pt-8 xsm:ml-[19vw] bg-black"
      >
        <TopBar />
      </div>
      <div className="flex flex-col gap-8 trending ml-[22vw] text-white mt-10">
        <span className="font-bold text-xl">Trending At This Moment</span>
        <div className="flex xsm:flex-row flex-col gap-10 flex-wrap">
          {movies.map((movie: Movie) => (
            <div key={movie.id}>
              <button onClick={() => handleCardClick(movie)}>
                <TrendingCard movie={movie} />
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedMovie && (
        <div className="ml-[20vw] w-[70vw] ">
          <button onClick={handleCloseClick}>Close Enlarged Card</button>
          <TrendingBigCard movie={selectedMovie} />
        </div>
      )}
    </div>
  );
};

export default Trending;
