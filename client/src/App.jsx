import { useState } from "react";
// import './App.css'
import SignUp from "./customerPages/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./customerPages/Dashboard.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
