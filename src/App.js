import NavBar from "./component/NavBar";
import MoviesList from "./component/MoviesList";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MovieContent from "./component/MovieContent";

function App() {

  return (
    <div className="App">
      <NavBar/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<MoviesList/>}/>
              <Route path="/movie/:id" element={<MovieContent/>}/>
            </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
