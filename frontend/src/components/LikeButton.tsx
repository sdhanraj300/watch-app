import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
interface LikeButtonProps {
  size?: string;
  text?: string;
  link?: string;
}
const LikeButton = ({ size }: LikeButtonProps) => {
  return (
    <div>
      <button className={`${size} items-center rounded-md bg-gradient-to-tr  from-white `}>
        <FaRegHeart className="ml-auto mr-auto mb-auto mt-auto" />
      </button>
    </div>
  );
};

export default LikeButton;
