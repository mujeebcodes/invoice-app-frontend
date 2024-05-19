import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import NavLinks from "./NavLinks";

type Props = {};
const NavCTA = (props: Props) => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  console.log(user);
  return (
    <div>
      {isAuthenticated ? (
        <Sheet>
          <SheetTrigger>
            <div className="w-10">
              <img
                src={user?.picture}
                alt="user-image"
                className="w-full rounded-full"
              />
            </div>
          </SheetTrigger>
          <SheetContent className="space-y-3">
            <SheetTitle>
              <h3>
                {user?.given_name} {user?.family_name}
              </h3>
            </SheetTitle>
            <Separator />
            <SheetDescription>
              <NavLinks />
            </SheetDescription>
          </SheetContent>
        </Sheet>
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
