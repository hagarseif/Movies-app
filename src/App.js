import { useEffect, useState } from "react";
import NavBar from "./component/NavBar";
import MoviesList from "./component/MoviesList";
import axios from "axios";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MovieContent from "./component/MovieContent";

function App() {
  
  const [totalPage,setTotalPage]=useState(0)

  const getPage=async (page)=>{
    const movies=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5585ab4c8b285b606e29df40ab14c10c&page=${page}`)
    setTotalPage(movies.data.total_pages)
  }



  const handelSearch= async(w)=>{
    if(w===""){
      // getMovies()
    }
    else{
    const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${w}&api_key=5585ab4c8b285b606e29df40ab14c10c`)
    // setallMovies(res.data.results)
    setTotalPage(res.data.total_pages)
    }
  }

  return (
    <div className="App">
      <NavBar handelSearch={handelSearch}/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<MoviesList  getPage={getPage} pageCount={totalPage}/>}/>
              <Route path="/movie/:id" element={<MovieContent/>}/>
            </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
