import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const NavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/invoices"
        className="flex bg-white p-3 items-center font-bold hover:text-nav mb-2"
      >
        Invoices
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white p-3 items-center font-bold hover:text-nav mb-2"
      >
        User Profile
      </Link>
      <Button
        className="flex items-center px-3 font-bold hover:bg-gray-500"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </>
  );
};
export default NavLinks;
