import { Link } from "react-router-dom";
interface WatchButtonProps {
  size?: string;
  text?: string;
  link?: string;
}
const WatchButton = ({ size, text, link }: WatchButtonProps) => {
  return (
    <Link to={`${link}`}>
      <button className={`${size} text-white p-3 rounded-md hover:cursor-pointer bg-[#6100C2]`}>{text}</button>
    </Link>
  );
};

export default WatchButton;
