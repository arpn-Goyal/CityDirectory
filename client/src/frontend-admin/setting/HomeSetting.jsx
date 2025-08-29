import React, { useState } from "react";
import Header from "../navs/HeaderSidebar";
import Sidebar from "../navs/Sidebar";
import axios from "axios";

const HomeSetting = () => {
  const [formData, setFormData] = useState({
    brandName: "",
    brandLogo: null,
    heroBanner: null,
    sponsorLogos: [],
    showPropertySection: "enable",
    propertyCount: 0,
    enquiryForm: "enable",
    neighbourSection: "enable",
    sellingSection: "enable",
    meetTeam: "enable",
  });

  // handle change for text, number, radio
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      if (name === "sponsorLogos") {
        setFormData({ ...formData, sponsorLogos: [...files] });
      } else {
        setFormData({ ...formData, [name]: files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("brandName", formData.brandName);
    if (formData.brandLogo) data.append("brandLogo", formData.brandLogo);
    if (formData.heroBanner) data.append("heroBanner", formData.heroBanner);
    formData.sponsorLogos.forEach((file) => data.append("sponsorLogos", file));

    // controls (always send string "true"/"false")
    data.append(
      "controls[showPropertySection]",
      formData.showPropertySection === "enable" ? "true" : "false"
    );
    data.append("controls[propertyCount]", formData.propertyCount || "0");
    data.append(
      "controls[enquiryForm]",
      formData.enquiryForm === "enable" ? "true" : "false"
    );
    data.append(
      "controls[neighbourSection]",
      formData.neighbourSection === "enable" ? "true" : "false"
    );
    data.append(
      "controls[interestedInSellingSection]",
      formData.sellingSection === "enable" ? "true" : "false"
    );
    data.append(
      "controls[meetTeam]",
      formData.meetTeam === "enable" ? "true" : "false"
    );

    try {
      const res = await axios.post(
        "http://localhost:4000/api/home-settings/save",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Error saving settings");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Home Settings</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Settings</li>
              <li className="breadcrumb-item active">Home</li>
            </ol>
          </nav>
        </div>

        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            {/* Home Page Settings */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Home Page Settings</h4>
              </div>
              <div className="card-body">
                {/* Brand Logo */}
                <div className="mb-3">
                  <label htmlFor="brandLogo" className="form-label">
                    Brand Logo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="brandLogo"
                    name="brandLogo"
                    onChange={handleChange}
                    accept="image/*"
                  />
                </div>

                {/* Brand Name */}
                <div className="mb-3">
                  <label htmlFor="brandName" className="form-label">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="brandName"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="Enter brand name"
                    required
                  />
                </div>

                {/* Hero Banner */}
                <div className="mb-3">
                  <label htmlFor="heroBanner" className="form-label">
                    Hero Banner
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="heroBanner"
                    name="heroBanner"
                    onChange={handleChange}
                    accept="image/*"
                  />
                </div>

                {/* Sponsor Logos */}
                <div className="mb-3">
                  <label htmlFor="sponsorLogos" className="form-label">
                    Sponsor Logos
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="sponsorLogos"
                    name="sponsorLogos"
                    multiple
                    onChange={handleChange}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>

            {/* Controls Section */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-secondary text-white">
                <h4 className="mb-0">Controls</h4>
              </div>
              <div className="card-body">
                {/* Show Property Section */}
                <div className="mb-3">
                  <label className="form-label">Show Property Section</label>
                  <div>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="showPropertySection"
                        value="enable"
                        checked={formData.showPropertySection === "enable"}
                        onChange={handleChange}
                      />{" "}
                      Enable
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="showPropertySection"
                        value="disable"
                        checked={formData.showPropertySection === "disable"}
                        onChange={handleChange}
                      />{" "}
                      Disable
                    </label>
                  </div>
                </div>

                {/* Property Count */}
                <div className="mb-3">
                  <label htmlFor="propertyCount" className="form-label">
                    Property Count on Home Page
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="propertyCount"
                    name="propertyCount"
                    value={formData.propertyCount}
                    onChange={handleChange}
                    min="0"
                  />
                </div>

                {/* Enquiry Form */}
                <div className="mb-3">
                  <label className="form-label">Enquiry Form</label>
                  <div>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="enquiryForm"
                        value="enable"
                        checked={formData.enquiryForm === "enable"}
                        onChange={handleChange}
                      />{" "}
                      Enable
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="enquiryForm"
                        value="disable"
                        checked={formData.enquiryForm === "disable"}
                        onChange={handleChange}
                      />{" "}
                      Disable
                    </label>
                  </div>
                </div>

                {/* Neighbour Section */}
                <div className="mb-3">
                  <label className="form-label">Neighbour Section</label>
                  <div>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="neighbourSection"
                        value="enable"
                        checked={formData.neighbourSection === "enable"}
                        onChange={handleChange}
                      />{" "}
                      Enable
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="neighbourSection"
                        value="disable"
                        checked={formData.neighbourSection === "disable"}
                        onChange={handleChange}
                      />{" "}
                      Disable
                    </label>
                  </div>
                </div>

                {/* Interested in Selling Section */}
                <div className="mb-3">
                  <label className="form-label">
                    Interested in Selling Section
                  </label>
                  <div>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sellingSection"
                        value="enable"
                        checked={formData.sellingSection === "enable"}
                        onChange={handleChange}
                      />{" "}
                      Enable
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sellingSection"
                        value="disable"
                        checked={formData.sellingSection === "disable"}
                        onChange={handleChange}
                      />{" "}
                      Disable
                    </label>
                  </div>
                </div>

                {/* Meet Team */}
                <div className="mb-3">
                  <label className="form-label">Meet Team</label>
                  <div>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="meetTeam"
                        value="enable"
                        checked={formData.meetTeam === "enable"}
                        onChange={handleChange}
                      />{" "}
                      Enable
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="meetTeam"
                        value="disable"
                        checked={formData.meetTeam === "disable"}
                        onChange={handleChange}
                      />{" "}
                      Disable
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-end">
              <button type="submit" className="btn btn-success px-4">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default HomeSetting;
