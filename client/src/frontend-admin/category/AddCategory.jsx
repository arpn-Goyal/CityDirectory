import React, { useState } from "react";
import Header from "../navs/HeaderSidebar";
import Sidebar from "../navs/Sidebar";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    categoryImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "categoryImage") {
      setFormData({ ...formData, categoryImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // TODO: API call to submit data
  };

  const handleReset = () => {
    setFormData({
      categoryName: "",
      categoryImage: null,
    });
    document.getElementById("categoryForm").reset();
  };

  return (
    <>
      <Header />
      <Sidebar />
       <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Property</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/index.html">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">Property</li>
              <li className="breadcrumb-item active">Add Property</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Add Category</h4>
        </div>
        <div className="card-body">
          <form id="categoryForm" onSubmit={handleSubmit}>
            {/* Category Name */}
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category Name
              </label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                placeholder="Enter category name"
                required
              />
            </div>

            {/* Category Image */}
            <div className="mb-3">
              <label htmlFor="categoryImage" className="form-label">
                Category Image
              </label>
              <input
                type="file"
                className="form-control"
                id="categoryImage"
                name="categoryImage"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success">
                Add Category
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </main>
    </>
  );
};

export default AddCategory;
