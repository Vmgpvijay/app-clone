import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LanguageRegionModal() {
  const [translationEnabled, setTranslationEnabled] = useState(false);

  const toggleTranslation = () => {
    setTranslationEnabled(!translationEnabled);
  };

  const suggestedLanguages = [
    { lang: "English", region: "United States" },
    { lang: "English", region: "United Kingdom" },
    { lang: "हिन्दी", region: "भारत" },
    { lang: "ಕನ್ನಡ", region: "ಭಾರತ" },
    { lang: "मराठी", region: "भारत" },
  ];

  const allLanguages = [
    { lang: "English", region: "India" },
    { lang: "Azərbaycan dili", region: "Azərbaycan" },
    { lang: "Bahasa Indonesia", region: "Indonesia" },
    { lang: "Bosanski", region: "Bosna i Hercegovina" },
    { lang: "Català", region: "Espanya" },
  ];

  return (
    <div
      className="modal fade"
      id="languageModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Language and region</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="mt-3">
            <h6>Translation</h6>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={translationEnabled}
                onChange={toggleTranslation}
              />
              <label className="form-check-label">
                Automatically translate descriptions and reviews to English.
              </label>
            </div>
          </div>

          <hr />

          <h6>Suggested languages and regions</h6>
          <div className="d-flex flex-wrap gap-3">
            {translationEnabled && suggestedLanguages.map((item, index) => (
              <div key={index} className="border rounded p-2">
                <strong>{item.lang}</strong>
                <div>{item.region}</div>
              </div>
            ))}
          </div>

          <hr />

          <h6>Choose a language and region</h6>
          <div className = "languageModal">            
            {allLanguages.map((item, index) => (
            <div key={index} className="border rounded p-2 mapped">
                <strong>{item.lang}</strong>
                <div>{item.region}</div>
              </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageRegionModal;
