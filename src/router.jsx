import { createBrowserRouter } from "react-router-dom";
import Decks from "./components/decks/Decks.jsx";
import Layout from "./components/layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Decks />,
      },
    ],
  },
]);

export default router;
