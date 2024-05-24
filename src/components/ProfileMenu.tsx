import { useAuth0 } from "@auth0/auth0-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import NavLinks from "./NavLinks";

const ProfileMenu = () => {
  const { user } = useAuth0();
  return (
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
  );
};
export default ProfileMenu;
