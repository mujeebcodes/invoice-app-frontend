import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

type Props = {
  isDarkMode: boolean;
};
const ThemeToggle = ({ isDarkMode }: Props) => {
  return (
    <div className="w-5">
      <img src={isDarkMode ? sun : moon} alt="sun/moon" className="w-full" />
    </div>
  );
};
export default ThemeToggle;
