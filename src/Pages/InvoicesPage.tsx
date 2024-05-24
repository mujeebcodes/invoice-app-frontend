import { useGetInvoices } from "@/api/InvoiceApi";
import InvoicesPageHeader from "@/components/InvoicesPageHeader";
import NoInvoices from "@/components/NoInvoices";

const InvoicesPage = () => {
  const { invoices, isLoading } = useGetInvoices();

  console.log(invoices);

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="w-full flex flex-col items-center lg:w-3/5 lg:pt-28">
      <InvoicesPageHeader />
      {invoices.length === 0 && <NoInvoices />}
    </div>
  );
};
export default InvoicesPage;
