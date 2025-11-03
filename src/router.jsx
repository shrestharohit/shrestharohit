import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PRJourney from "./pages/PRJourney";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/pr-journey", element: <PRJourney /> },
]);