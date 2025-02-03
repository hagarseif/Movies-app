
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieDetails from './MovieDetails';
import { Row } from 'react-bootstrap';
import Pagination from './Pagination';
import { getAllMovies } from '../redux/action/movieAction';

const MoviesList = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.allMovies); 
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movieData.movie.length > 0 && loading) {
      setLoading(false);
    }    
  }, [movieData, loading]); 

  if (loading) {
    return <h2 className="text-center my-5 font">جاري تحميل الأفلام...</h2>;
  }

  return (
    <Row className="m-5">
      {movieData.movie.length > 0 ? (
        movieData.movie.map((m) => {
          return <MovieDetails movie={m} key={m.id} />;
        })
      ) : (
        <h2 className="text-center my-5 font">لا يوجد أفلام ...</h2>
      )}
      {movieData.pageCount >0 ? <Pagination /> : null}
    </Row>
  );
};


export default MoviesList;
