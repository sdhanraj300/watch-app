import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/reducers/moviesSlice";
import LikeButton from "./LikeButton";
import DisLikeButton from "./DisLikeButton";
import { Movie } from "../utils/constants";

interface ContinueWatchingProps {
  movie: Movie;
}

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ movie }) => {
  const dispatch = useDispatch();

  const isLiked = useSelector(
    (state: { movies: { allMovies: Movie[] } }) =>
      state.movies.allMovies.find((m: Movie) => m.id === movie.id)?.isLiked
  );

  const onClickLike = () => {
    const updatedMovie = { ...movie, isLiked: true };
    dispatch(addToFavorites(updatedMovie));
  };

  const onClickDislike = () => {
    dispatch(removeFromFavorites(movie.id));
  };

  const backgroundStyle: React.CSSProperties = {
    background: `url(${movie.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundStyle} className="h-[30vh] w-[20vw] rounded-md">
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
      <div className="bg-gradient-to-r from-white to-gray-400 opacity-90 rounded-md mt-[160px]">
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

export default ContinueWatching;
