import { useGetInvoices } from "@/api/InvoiceApi";
import InvoicesPageHeader from "@/components/InvoicesPageHeader";
import NoInvoices from "@/components/NoInvoices";

const InvoicesPage = () => {
  const { invoices, isLoading } = useGetInvoices();

  return (
    <div className="flex flex-col items-center">
      <InvoicesPageHeader />
      {invoices.length === 0 && <NoInvoices />}
    </div>
  );
};
export default InvoicesPage;
