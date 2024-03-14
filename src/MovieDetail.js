import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://65f16b8e034bdbecc7627150.mockapi.io/movie/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  //   console.log(movie);
  const ratingStyle = { color: movie.rating >= 8.5 ? "green" : "red" };
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>
          <h3 style={ratingStyle} className="movie-rating">
            {movie.rating}🔥
          </h3>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
      <Button
        variant="contained"
        startIcon={<ArrowBackIosIcon></ArrowBackIosIcon>}
        onClick={() => navigate(-1)}
      ></Button>
    </div>
  );
}
