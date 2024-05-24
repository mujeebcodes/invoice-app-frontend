import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";

const FilterDropdown = () => {
  const [position, setPosition] = useState("pending");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <p>
          Filter by status <span></span>
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-48">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="draft" className="relative">
            Draft
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="pending"
            className="flex gap-x-4 items-center justify-start"
          >
            Pending
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="paid"
            className="flex gap-x-4 items-center justify-start"
          >
            Paid
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default FilterDropdown;
