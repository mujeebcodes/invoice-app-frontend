import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import { useTheme } from "@/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-5 cursor-pointer" onClick={toggleTheme}>
      <img
        src={theme === "dark" ? sun : moon}
        alt="sun/moon"
        className="w-full"
      />
    </div>
  );
};
export default ThemeToggle;
