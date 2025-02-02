import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieDetails = ({ movie }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3">
    <Link to={`/movie/${movie.id}`}>
      
        <div className="cardL">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <div className="overlay">
            <p>اسم الفيلم : {movie.title}</p>
            <p>تاريخ الاصدار:{movie.release_date}</p>
            <p>عدد المقيمين : {movie.vote_count}</p>
            <p>التقيم :{movie.vote_average}</p>
          </div>
        </div>
    </Link>
    </Col>
  );
};

export default MovieDetails;
