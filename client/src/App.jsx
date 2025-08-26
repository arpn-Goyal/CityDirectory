import { useState } from "react";
// import './App.css'
import SignUp from "./frontend-user/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./frontend-user/Dashboard.jsx";
import Login from "./frontend-user/Login.jsx";
import AddListiening from "./frontend-admin/listing/AddListiening.jsx";


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
