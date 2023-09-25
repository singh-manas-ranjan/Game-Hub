import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import GameDetailsPage from "./pages/GameDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "games/:id", element: <GameDetailsPage /> },
    ],
  },
]);
export default router;
