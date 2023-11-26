interface NavLink {
  name: string;
  path: string;
}
export interface Movie {
  title: string;
  year: string;
  category: string;
  image: string;
  description?: string;
  length?: string;
  rating?: string;
}
import tokyo_img from "../assets/tokyo_train.png";
export const trendingMovies: Movie[] = [
  {
    title: "Tokyo Train",
    year: "2020",
    category: "Action Comedy",
    image: `${tokyo_img}`,
    description:
      "A great movie about Tokyo Train where you can see the train and the city of Tokyo",
    length: "1h 30m",
    rating: "8.5",
  },
  {
    title: "Tokyo Train",
    year: "2020",
    category: "Action Comedy",
    image: `${tokyo_img}`,
    description:
      "A great movie about Tokyo Train where you can see the train and the city of Tokyo",
    length: "1h 30m",
    rating: "8.5",
  },
  {
    title: "Tokyo Train",
    year: "2020",
    category: "Action Comedy",
    image: `${tokyo_img}`,
    description:
      "A great movie about Tokyo Train where you can see the train and the city of Tokyo",
    length: "1h 30m",
    rating: "8.5",
  },
  {
    title: "Tokyo Train",
    year: "2020",
    category: "Action Comedy",
    image: `${tokyo_img}`,
    description:
      "A great movie about Tokyo Train where you can see the train and the city of Tokyo",
    length: "1h 30m",
    rating: "8.5",
  },
];

export const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "FaFilm",
  },
  {
    name: "Favorites",
    path: "FaRegHeart",
  },
  {
    name: "Trending",
    path: "IoMdTrendingUp",
  },
  {
    name: "Coming Soon",
    path: "FaRegCalendarAlt",
  },
];

export const navLinks2: NavLink[] = [
  {
    name: "Community",
    path: "IoPeople",
  },
  {
    name: "Social",
    path: "BsChat",
  },
];

export const navLinks3: NavLink[] = [
  {
    name: "Settings",
    path: "GiSettingsKnobs",
  },
  {
    name: "Logout",
    path: "MdLogout",
  },
];
