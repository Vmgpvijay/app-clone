import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const suggestedDestinations = [
    "Chennai",
    "Coimbatore",
    "Bangalore",
    "Hyderabad",
    "Mumbai",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container-fluid align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="#" alt="Airbnb" width="100" />
        </a>

        <ul className="navbar-nav mx-auto d-flex flex-row align-items-center gap-4">
          <li className="nav-item text-center">
            <img src="#" width="30" alt="Home" />
            <div className="fw-bold">Homes</div>
          </li>
          <li className="nav-item text-center position-relative">
            <img src="#" width="30" alt="Experiences" />
            <span className="badge bg-primary position-absolute top-0 start-100 translate-middle rounded-pill small">
              NEW
            </span>
            <div>Experiences</div>
          </li>
          <li className="nav-item text-center position-relative">
            <img src="#" width="30" alt="Services" />
            <span className="badge bg-primary position-absolute top-0 start-100 translate-middle rounded-pill small">
              NEW
            </span>
            <div>Services</div>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          <p className="mb-0">Become a host</p>
          <button className="btn btn-light rounded-circle">
            <i className="bi bi-globe"></i>
          </button>
          <button className="btn btn-light rounded-circle">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      <div className="container-fluid mt-3 position-relative">
        <div
          className="rounded-pill bg-white shadow-sm d-flex justify-content-between align-items-center px-3 py-2 w-100"
          style={{ maxWidth: "800px", margin: "0 auto", cursor: "pointer" }}
        >
          <div className="px-3 border-end" onClick={() => setShowSearch(!showSearch)}>
            <div className="fw-bold small">Where</div>
            <div className="text-muted small">Search destinations</div>
          </div>
          <div className="px-3 border-end">
            <div className="fw-bold small">Check in</div>
            <div className="text-muted small">Add dates</div>
          </div>
          <div className="px-3 border-end">
            <div className="fw-bold small">Check out</div>
            <div className="text-muted small">Add dates</div>
          </div>
          <div className="px-3 d-flex align-items-center">
            <div>
              <div className="fw-bold small">Who</div>
              <div className="text-muted small">Add guests</div>
            </div>
            <button className="btn btn-danger btn-sm ms-3 rounded-circle">
              <i className="bi bi-search text-white"></i>
            </button>
          </div>
        </div>

   
        {showSearch && (
          <div
            className="bg-white shadow border rounded p-3 position-absolute w-100"
            style={{
              maxWidth: "800px",
              left: "50%",
              transform: "translateX(-50%)",
              top: "100%",
              zIndex: 10,
            }}
          >
            <h6 className="mb-3">Suggested Destinations</h6>
            <div className="row">
              {suggestedDestinations.map((city, idx) => (
                <div className="col-6 col-md-4 mb-2" key={idx}>
                  <button className="btn btn-outline-secondary w-100">{city}</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
