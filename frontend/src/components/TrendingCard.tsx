import {
  addToFavorites,
  removeFromFavorites,
} from "../store/reducers/moviesSlice";
import { Movie } from "../utils/constants";
import DisLikeButton from "./DisLikeButton";
import LikeButton from "./LikeButton";
import { useSelector, useDispatch } from "react-redux";

interface TrendingCardProps {
  movie: Movie;
}
const TrendingCard = ({ movie }: TrendingCardProps) => {
  const dispatch = useDispatch();

  const onClickLike = () => {
    const updatedMovie = { ...movie, isLiked: true };
    dispatch(addToFavorites(updatedMovie));
  };

  const onClickDislike = () => {
    dispatch(removeFromFavorites(movie.id));
  };

  const isLiked = useSelector(
    (state: { movies: { allMovies: Movie[] } }) =>
      state.movies.allMovies.find((m: Movie) => m.id === movie.id)?.isLiked
  );

  return (
    <div
      style={{
        background: `url(${movie.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:h-[30vh] sm:w-[40vw] sm:h-[50vh] md:w-[50vw] lg:w-[20vw]  rounded-md border-2 flex flex-col justify-between"
    >
      <div className="flex justify-between">
        <div></div>
        <button onClick={isLiked ? onClickDislike : onClickLike}>
          {isLiked ? (
            <DisLikeButton size={`h-[50px] w-[50px] mt-2`} />
          ) : (
            <LikeButton size={`h-[50px] w-[50px] mt-2`} />
          )}
        </button>
      </div>
      <div className="bg-gradient-to-r from-white to-gray-400 opacity-90 rounded-md">
        <div className="flex flex-col p-2 gap-2 text-black">
          <p className="font-bold text-xl">{movie.title}</p>
          <p>
            {movie.year} {" | "}
            {movie.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
