import { useState } from "react";
// import './App.css'
import SignUp from "./frontend-user/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./frontend-user/Dashboard.jsx";
import Login from "./frontend-user/Login.jsx";
import AddListiening from "./frontend-admin/listing/AddListing.jsx";
import AllListings from "./frontend-admin/listing/AllListings.jsx";
import AddListing from "./frontend-admin/listing/AddListing.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AddListing />,
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
