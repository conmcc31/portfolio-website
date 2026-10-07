import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AboutMe from "./AboutMe.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "./Landing.jsx";
import Experience from "./Experience.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
