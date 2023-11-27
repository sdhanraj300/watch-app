import SideBar from "../components/SideBar";
import { useSelector, useDispatch } from "react-redux";
import {
  MoviesState,
  addToFavorites,
  removeFromFavorites,
} from "../store/reducers/moviesSlice";
import { Movie } from "../utils/constants";
import LikeButton from "../components/LikeButton";
import TopBar from "../components/TopBar";
import DisLikeButton from "../components/DisLikeButton";

const Favorites = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: { movies: { allMovies: Movie[] } }) => state.movies.allMovies
  );
  const favoriteMovies = movies.filter((movie: Movie) => movie.isLiked);
  const onLikeClick = (movie: Movie) => {
    if (movie.isLiked) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className="">
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
      <div className="ml-[19vw] flex-col flex-wrap gap-4 p-4 h-screen overflow-hidden bg-black">
        <p className="text-white text-4xl p-3">Favorites</p>
        <div className="flex flex-row flex-wrap gap-10">
          {favoriteMovies.map((movie: Movie) => {
            const backgroundStyle: React.CSSProperties = {
              background: `url(${movie.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            };

            return (
              <div
                key={movie.id}
                style={backgroundStyle}
                className="h-[30vh] w-[20vw] rounded-md"
              >
                <div className="flex justify-between text-white">
                  <div className=""></div>
                  <button onClick={() => onLikeClick(movie)}>
                    {movie.isLiked ? (
                      <DisLikeButton size={`h-[50px] w-[50px] mt-2`} />
                    ) : (
                      <LikeButton size={`h-[50px] w-[50px] mt-2`} />
                    )}
                  </button>
                </div>
                <div className="bg-gradient-to-r from-white to-gray-400 opacity-90 rounded-md mt-[160px]">
                  <div className="flex flex-col p-2 gap-2 ">
                    <p className="font-bold text-xl">{movie.title}</p>
                    <p>
                      {movie.year} {" | "}
                      {movie.category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
