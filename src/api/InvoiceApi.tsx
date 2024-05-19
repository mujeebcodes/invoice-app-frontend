import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const useGetInvoices = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getInvoicesRequest = async () => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/invoices`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get restaurants");
    }

    return response.json();
  };

  const { data: invoices, isLoading } = useQuery(
    "fetchInvoices",
    getInvoicesRequest
  );

  return { invoices, isLoading };
};
