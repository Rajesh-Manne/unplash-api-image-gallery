import React from "react";

export default function searchBar({ handleChange, value, fetchImages }) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 text-center">
            <div className="search-bar" autoComplete="on">
              <input
                type="text"
                className="input"
                onChange={handleChange}
                value={value}
                placeholder="search for images here"
                required="required"
                autoComplete="on"
              />

              <div className="search-btn">
                <button
                  type="submit"
                  onClick={() => fetchImages()}
                  className="search-button"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
