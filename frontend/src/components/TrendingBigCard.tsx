import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../utils/constants";
import LikeButton from "./LikeButton";
import DisLikeButton from "./DisLikeButton";
import WatchButton from "./WatchButton";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/reducers/moviesSlice";

interface TrendingBigCardProps {
  movie: Movie;
}

const TrendingBigCard: React.FC<TrendingBigCardProps> = ({ movie }) => {
  const isLiked = useSelector(
    (state: { movies: { allMovies: Movie[] } }) =>
      state.movies.allMovies.find((m: Movie) => m.id === movie.id)?.isLiked
  );
  const dispatch = useDispatch();

  const onClickLike = () => {
    const updatedMovie = { ...movie, isLiked: true };
    dispatch(addToFavorites(updatedMovie));
  };

  const onClickDislike = () => {
    dispatch(removeFromFavorites(movie.id));
  };

  return (
    <div className="flex flex-row ml-10">
      <img
        src={movie.image}
        className="h-[25rem] w-[30rem] object-contain"
        alt={movie.title}
      />
      <div className="text-white flex flex-row ">
        <div className="flex flex-col gap-4 mt-20">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <span className="font-light text-xl ">
            {movie.year} {" | "} {movie.category} {movie.length}
          </span>
          <p>{movie.description}</p>
          <div className="btn flex items-center gap-5">
            <WatchButton
              size="w-[10rem] h-[5rem]"
              link="/watch/movie"
              text="Watch Now"
            />
            <button onClick={isLiked ? onClickDislike : onClickLike}>
              {isLiked ? (
                <DisLikeButton size={`h-[50px] w-[50px] mt-2`} />
              ) : (
                <LikeButton size={`h-[50px] w-[50px] mt-2`} />
              )}
            </button>
          </div>
        </div>
        <div className="mt-10 mr-10">⭐ {movie.rating}/10</div>
      </div>
    </div>
  );
};

export default TrendingBigCard;
