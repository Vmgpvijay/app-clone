

function PropertyCard({ property }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={property.image} className="card-img-top" alt={property.title} />
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p className="card-text">{property.location}</p>
          <p className="card-text"><strong>${property.price} night</strong></p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

