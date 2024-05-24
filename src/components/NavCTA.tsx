import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

import ProfileMenu from "./ProfileMenu";

const NavCTA = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <ProfileMenu />
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </div>
  );
};
export default NavCTA;
