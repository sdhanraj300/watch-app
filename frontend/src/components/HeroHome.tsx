import WatchButton from "./WatchButton";
import LikeButton from "./LikeButton";

const HeroHome = () => {
  return (
    <div className="text-white ml-10 mt-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-semibold">Insider</h1>
        <p className="text-sm">2022|Comedy Horror | Season 1</p>
      </div>
      <div className="flex gap-5 items-center mb-4 ">
          <WatchButton
            size="h-15 w-15"
            text="Watch Now"
            link="/watch/insider/season1"
          />
        <LikeButton size="h-[40px] w-[40px]" />
      </div>
    </div>
  );
};

export default HeroHome;
