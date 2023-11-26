import LikeButton from "./LikeButton";

interface TrendingCardProps {
  title: string;
  year: string;
  category: string;
  image: string;
}
const ContinueWatching = ({
  title,
  year,
  category,
  image,
}: TrendingCardProps) => {
  const backgroundStyle: React.CSSProperties = {
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={backgroundStyle} className="h-[30vh] w-[20vw] rounded-md">
      <div className="">
        <LikeButton size="h-[40px] w-[40px] ml-[190px] mt-2" />
      </div>
      <div className="bg-gradient-to-r from-white to-gray-400 opacity-90 rounded-md mt-[160px]">
        <div className="flex flex-col p-2 gap-2 text-black">
          <p className=" font-bold text-xl">{title}</p>
          <p className="">{year} {" | " }{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
