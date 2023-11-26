import { Movie } from "../utils/constants";
import LikeButton from "./LikeButton";
import WatchButton from "./WatchButton";

const TrendingBigCard = (movie: Movie) => {
  return (
    <div className="flex flex-row ml-10">
      <img src={movie.image} className="h-[25rem] w-[30rem] object-contain" />
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
            <LikeButton size="h-10 w-20 " />
          </div>
        </div>
        <div className="mt-10 mr-10">⭐  {movie.rating}/10</div>
      </div>
    </div>
  );
};

export default TrendingBigCard;
