import React, { useState } from "react";
import PropertyResults from "./PropertyResults";
import FilterDropdown from "./FilterDropdown";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [beds, setBeds] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // TODO: Replace with API call
    const dummyResults = [
      {
        id: 1,
        title: "EXCLUSIVE VILLA | ELIE SAAB | EXTENDED PLOT CORNER",
        price: "AED 5,300,000",
        type: "Villa",
        image: "https://primadom.ae/wp-content/uploads/2025/04/f00d0880-240a-11f0-8ec5-ee43be9a9b21-1536x1152.avif",
      },
      {
        id: 2,
        title: "Genuine Resale | Full Lagoon View | Contemporary",
        price: "AED 12,500,000",
        type: "Villa",
        image: "https://primadom.ae/wp-content/uploads/2025/04/f00d0880-240a-11f0-8ec5-ee43be9a9b21-1536x1152.avif",
      },
      {
        id: 3,
        title: "BIG PLOT | ULTRA-LUXURY VILLA | CLOSE TO PARK",
        price: "AED 11,450,000",
        type: "Villa",
        image: "https://primadom.ae/wp-content/uploads/2025/04/f00d0880-240a-11f0-8ec5-ee43be9a9b21-1536x1152.avif",
      },
      {
        id: 1,
        title: "EXCLUSIVE VILLA | ELIE SAAB | EXTENDED PLOT CORNER",
        price: "AED 5,300,000",
        type: "Villa",
        image: "https://primadom.ae/wp-content/uploads/2025/04/f00d0880-240a-11f0-8ec5-ee43be9a9b21-1536x1152.avif",
      },
      {
        id: 2,
        title: "Genuine Resale | Full Lagoon View | Contemporary",
        price: "AED 12,500,000",
        type: "Villa",
        image: "https://primadom.ae/wp-content/uploads/2025/04/f00d0880-240a-11f0-8ec5-ee43be9a9b21-1536x1152.avif",
      },
      {
        id: 3,
        title: "BIG PLOT | ULTRA-LUXURY VILLA | CLOSE TO PARK",
        price: "AED 11,450,000",
        type: "Villa",
        image: "https://primadom.ae/wp-content/uploads/2025/04/f00d0880-240a-11f0-8ec5-ee43be9a9b21-1536x1152.avif",
      },
    ];
    setResults(dummyResults);
  };

  const handleClear = () => {
    setQuery("");
    setStatus("");
    setType("");
    setBeds("");
    setResults([]);
  };

  return (
    <div className="container my-4">

      {/* Search bar section */}
      <div className="search-bar p-3 d-flex align-items-center gap-2 bg-light rounded shadow-sm">
        {/* Search Input */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter Keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Dropdown Filters */}
        <FilterDropdown
          label="Status"
          options={["New Projects", "Rent", "Sale"]}
          value={status}
          setValue={setStatus}
        />
        <FilterDropdown
          label="Type"
          options={["Villa", "Apartment", "Townhouse"]}
          value={type}
          setValue={setType}
        />
        <FilterDropdown
          label="Beds"
          options={["1", "2", "3", "4+", "5+"]}
          value={beds}
          setValue={setBeds}
        />

        {/* Buttons */}
        <button className="btn btn-outline-secondary" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Results section BELOW the bar */}
      {results.length > 0 && (
        <div className="results-wrapper mt-3">
          {/* Header row */}
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
            <p className="mb-0 fw-bold">{results.length} Listings found</p>
            <button className="btn btn-link text-decoration-none">
              View All Results
            </button>
          </div>

          {/* Results list */}
          <PropertyResults results={results} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
