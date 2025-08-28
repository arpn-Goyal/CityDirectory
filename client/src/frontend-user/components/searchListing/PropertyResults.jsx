import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyResults = ({ results }) => {
  return (
    <div className="row g-3">
      {results.map((property) => (
        <div key={property.id} className="col-md-4 col-sm-6">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyResults;
