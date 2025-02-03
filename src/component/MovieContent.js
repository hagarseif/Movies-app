import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieContent = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);

  const getMovieDetails = async () => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=304088268ab729e3ad4c92b558a30558&language=ar`
    );
    setMovie(movies.data);
    console.log(movies.data.homepage)
  };
  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);
  return (
    <Container>
      <div className="card-details">
        <Row className="justify-content-center">
          <Col md="12" sm="12" xs="12" className="mt-3">
            <div className="film_details d-flex align-item-center">
              <img className="img-movie" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
              <div className="justify-content-center text-center mx-auto">
                <p className="border-bottom card-text-details">
                  اسم الفيلم:{movie.title}
                </p>
                <p className="border-bottom card-text-details">
                  تاريخ الفيلم:{movie.release_date}
                </p>
                <p className="border-bottom card-text-details">
                  عدد المقيمين:{movie.vote_count}
                </p>
                <p className="border-bottom card-text-details">
                  التقيم:{movie.vote_average}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="12" sm="12" xs="12" className="mt-1">
            <div className="card-story d-flex flex-column align-items-start">
              <div className="text-end p-4">
                <p className="card-text-title border-bottom">القصة:</p>
              </div>
              <div className="text-end p-2">
                <p className="card-text-story"> {movie.overview}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md="12"
            sm="12"
            xs="12"
            className="d-flex justify-content-center mt-4"
          >
            <Link to="/">
              <button
                style={{ backgroundColor: "#b45b35", border: "none" }}
                className="btn btn-primary mx-2 py-2 px-4"
              >
                عودة للرئيسية
              </button>
            </Link>
            <a href={movie.homepage} target="_blank">
              <button
                style={{ backgroundColor: "#b45b35", border: "none" }}
                className="btn btn-primary  py-2 px-4">
                مشاهدة الفيلم
              </button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MovieContent;
