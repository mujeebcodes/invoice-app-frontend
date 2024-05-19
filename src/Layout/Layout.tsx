import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
