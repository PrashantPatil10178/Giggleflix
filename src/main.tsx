import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import App from "./App";
import About from "./pages/About";
import ReactDOM from "react-dom/client";

import "./index.css";
import OurServices from "./pages/OurServices";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<OurServices />} />
    </>
  )
);

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  } else {
    console.error("Failed to find the root element.");
  }
});
