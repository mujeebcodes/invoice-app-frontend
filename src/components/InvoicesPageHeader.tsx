import FilterDropdown from "./FilterDropdown";
import { Button } from "./ui/button";

const InvoicesPageHeader = () => {
  return (
    <div className="w-full px-5 flex justify-between">
      <div>
        <p>Invoices</p>
        <p>7 invoices</p>
      </div>

      <div className="flex items-center gap-x-5">
        <FilterDropdown />
        <Button className="w-20 bg-purple py-5 rounded-full relative text-right md:w-36">
          <span className="absolute left-1 w-8 h-8 bg-white text-purple text-xl rounded-full flex items-center justify-center">
            +
          </span>
          <span className="hidden ml-7 text-lg md:block text-black dark:text-white">
            New invoice
          </span>
          <span className="md:hidden ml-7">New</span>
        </Button>
      </div>
    </div>
  );
};
export default InvoicesPageHeader;
