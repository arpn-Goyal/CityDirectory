import React from "react";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Dashboard */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="https://bootstrapmade.com/content/demo/NiceAdmin/index.html"
          >
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* Components */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Listing</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-alerts.html">
                <i className="bi bi-circle"></i>
                <span>Add Listing </span>
              </a>
            </li>
            <li>
              <a href="https://bootstrapmade.com/content/demo/NiceAdmin/components-accordion.html">
                <i className="bi bi-circle"></i>
                <span>All Listing</span>
              </a>
            </li>
        
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
