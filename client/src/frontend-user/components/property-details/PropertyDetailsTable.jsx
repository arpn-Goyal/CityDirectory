const PropertyDetailsTable = () => {
  return (
    <section className="container my-5">
      <h3>Property Details</h3>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>Property Type</td>
            <td>Villa</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>6200 sqft</td>
          </tr>
          <tr>
            <td>Bedrooms</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Bathrooms</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>Ready to Move</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default PropertyDetailsTable;