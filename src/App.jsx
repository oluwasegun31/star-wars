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
import { HomePage, SignInPage, SignUpPage } from "./pages";
import { Suspense } from "react";
import { InputFormProvider } from "./context";

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
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
