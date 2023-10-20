import { createBrowserRouter } from "react-router-dom";
import Decks from "./components/decks/Decks.jsx";
import Layout from "./components/layout/Layout.jsx";
import LearningWrapper from "./components/learning/LearningWrapper.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Decks />,
      },
      {
        path: "/learning/:deckId",
        element: <LearningWrapper />,
      },
    ],
  },
]);

export default router;
