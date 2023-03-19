import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { IndexPage } from "./page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
