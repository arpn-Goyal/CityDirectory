import { useState } from "react";
// import './App.css'
import SignUp from "./customerPages/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./customerPages/Dashboard.jsx";
import Login from "./customerPages/Login.jsx";


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
    {
      path: '/login',
      element: <Login/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
