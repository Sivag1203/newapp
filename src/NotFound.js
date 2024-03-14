import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h1>404 page not found</h1>
      <h2>
        <Link to="/portal/home">Back To Homepage</Link>
      </h2>
      <img
        src="https://cdn.dribbble.com/users/406903/screenshots/6723682/drawkit-grape-pack-illustration-3-dribbble-export-v0.1.gif"
        alt=""
      />
    </div>
  );
}
