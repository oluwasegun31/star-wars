import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./App.css";
import { MainLoader } from "./components";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(<Route path="/" element={<RootLayout />}></Route>)
  );
  return <RouterProvider router={router} />;
}

export default App;
