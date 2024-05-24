import Navbar from "@/components/Navbar";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="text-black dark:text-white flex flex-col gap-y-5 justify-between lg:flex-row lg:justify-start lg:gap-x-48">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
