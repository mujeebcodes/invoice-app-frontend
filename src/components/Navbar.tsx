import logo from "../assets/logo.svg";

import NavCTA from "./NavCTA";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-nav text-white flex justify-between items-center lg:flex-col lg:h-screen lg:rounded-r-3xl">
      <div className="w-20 lg:w-full">
        <img src={logo} alt="" />
      </div>

      <div className="flex items-center gap-4 mr-3 lg:flex-col lg:mb-3">
        <ThemeToggle />
        <NavCTA />
      </div>
    </nav>
  );
};
export default Navbar;
