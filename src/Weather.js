import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary  w-100"
            />
          </div>
        </div>
      </form>
      <h1>Frasdorf</h1>
      <ul>
        <li>Wednesday 05:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="Clear-fix">
            <img
              src="data:image/jpeg;base64,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"
              width="65"
              alt="mostly cloudy"
              className="float-left"
            />

            <span className="temperature">4</span>
            <span className="unit">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:18%</li>
            <li>Wind:20km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
