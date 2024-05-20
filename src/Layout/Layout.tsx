import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="text-black dark:text-white flex flex-col gap-y-5 justify-between lg:flex-row lg:justify-start lg:gap-x-5">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
