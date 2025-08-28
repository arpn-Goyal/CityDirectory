import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={property.image}
        className="card-img-top"
        alt={property.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h6 className="card-title">{property.title}</h6>
        <p className="card-text mb-1 fw-bold">{property.price}</p>
        <small className="text-muted">{property.type}</small>
      </div>
    </div>
  );
};

export default PropertyCard;
