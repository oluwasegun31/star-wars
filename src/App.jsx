import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./App.css";
import { MainLoader } from "./components";
import RootLayout from "./layout/RootLayout";
import {
  AccountSetupPage,
  CharactersPage,
  HomePage,
  PlanetsPage,
  ResetPasswordPage,
  SignInPage,
  SignUpPage,
  StarshipsPage,
} from "./pages";
import { Suspense } from "react";
import { GlobalUserProvider, InputFormProvider } from "./context";
import ProtectRoute from "./layout/ProtectRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="auth"
          element={
            <Suspense fallback={<MainLoader />}>
              <InputFormProvider>
                <Outlet />
              </InputFormProvider>
            </Suspense>
          }
        >
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="forgot-password" element={<ResetPasswordPage />} />
        </Route>
        <Route
          element={
            <Suspense fallback={<MainLoader />}>
              <ProtectRoute />
            </Suspense>
          }
        >
          <Route path="account-setup" element={<AccountSetupPage />} />
          <Route path="characters">
            <Route index element={<CharactersPage />} />
          </Route>
          <Route path="planets">
            <Route index element={<PlanetsPage />} />
          </Route>
          <Route path="starships">
            <Route index element={<StarshipsPage />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return (
    <GlobalUserProvider>
      <RouterProvider router={router} />
    </GlobalUserProvider>
  );
}

export default App;
