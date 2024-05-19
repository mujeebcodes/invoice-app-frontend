import { Auth0Provider, User } from "@auth0/auth0-react";
import { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !audience || !redirectUri) {
    throw new Error("Unable to initialize auth");
  }

  const onRedirect = () => {
    navigate("/auth-callback");
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri, audience }}
      onRedirectCallback={onRedirect}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithNavigate;
