import illustration from "../assets/illustration-empty.svg";

const NoInvoices = () => {
  return (
    <div className="flex flex-col items-center gap-y-10 mt-28">
      <div>
        <img src={illustration} alt="no invoice" />
      </div>

      <div className="text-center">
        <h3 className="font-extrabold text-2xl">There is nothing here</h3>
        <p className="w-3/5 mx-auto">
          Create an invoice by clicking the New button and get started
        </p>
      </div>
    </div>
  );
};
export default NoInvoices;
