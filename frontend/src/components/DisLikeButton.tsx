import { FaHeart } from "react-icons/fa";

interface LikeButtonProps {
  size?: string;
  text?: string;
  link?: string;
  isLiked?: boolean;
}

const DisLikeButton = ({ size, isLiked }: LikeButtonProps) => {
  return (
    <div>
      <div className={`${size} bg-black rounded-lg flex`}>
        <FaHeart className="mt-auto mb-auto ml-auto mr-auto" />
      </div>
    </div>
  );
};

export default DisLikeButton;
