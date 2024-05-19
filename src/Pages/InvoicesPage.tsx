import { useGetInvoices } from "@/api/InvoiceApi";

const InvoicesPage = () => {
  const { invoices, isLoading } = useGetInvoices();
  return <div>InvoicesPage</div>;
};
export default InvoicesPage;
