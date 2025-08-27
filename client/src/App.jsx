import { useState } from "react";
// import './App.css'
import SignUp from "./frontend-user/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./frontend-user/Dashboard.jsx";
import Login from "./frontend-user/Login.jsx";
import AddListiening from "./frontend-admin/listing/AddListing.jsx";
import AllListings from "./frontend-admin/listing/AllListings.jsx";
import AddListing from "./frontend-admin/listing/AddListing.jsx";
import PropertyDetails from "./frontend-user/pages/PropertyDetails.jsx";
import Contact from "./frontend-user/pages/ContactPage.jsx";
import AboutPage from "./frontend-user/pages/AboutPage.jsx";
import AddCategory from "./frontend-admin/category/AddCategory.jsx";
import AllCategory from "./frontend-admin/category/AllCategory.jsx";
import HomePage from "./frontend-admin/setting/HomeSetting.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/user/aboutPage',
      element: <AboutPage/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
