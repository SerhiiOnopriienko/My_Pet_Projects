import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../api/moviesApi";

export default function () {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId).then((res) => setMovie(res));
  }, []);
  return (
    <div className="movie-card">
      <h1>{movie.original_title}</h1>
      <div className="card-content">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
        />
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
