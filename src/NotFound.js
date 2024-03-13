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
        src="https://h2.gifposter.com/gifs/kids/happy-dance-gif-baby.gif"
        alt=""
      />
    </div>
  );
}
