
import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Popular Places</h2>
      <div className="row">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
