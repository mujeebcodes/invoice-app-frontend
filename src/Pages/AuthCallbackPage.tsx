import { useCreateUser } from "@/api/UserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const { createUser } = useCreateUser();
  const navigate = useNavigate();

  const userCreated = useRef(false);

  useEffect(() => {
    if (user?.sub && user.email && !userCreated.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      userCreated.current = true;
    }

    navigate("/invoices");
  }, [createUser, navigate, user]);
  return <div>Loading ...</div>;
};
export default AuthCallbackPage;
