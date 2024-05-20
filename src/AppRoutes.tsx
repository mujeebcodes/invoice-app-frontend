import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AuthCallbackPage from "./Pages/AuthCallbackPage";
import LandingPage from "./Pages/LandingPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import InvoicesPage from "./Pages/InvoicesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/invoices"
          element={
            <Layout>
              <InvoicesPage />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
