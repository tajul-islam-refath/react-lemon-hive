import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Conference from "./pages/Conference/Conference.tsx";
import Organizer from "./pages/Conference/Organizer.tsx";
import Speakers from "./pages/Conference/Speakers.tsx";
import Schedule from "./pages/Conference/Schedule.tsx";
import Sponsors from "./pages/Conference/Sponsors.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/conference/:id",
        element: <Conference />,
        children: [
          {
            path: "",
            element: <Organizer />,
          },
          {
            path: "organizer",
            element: <Organizer />,
          },
          {
            path: "speakers",
            element: <Speakers />,
          },
          {
            path: "schedule",
            element: <Schedule />,
          },
          {
            path: "sponsors",
            element: <Sponsors />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
