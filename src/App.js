import logo from './logo.svg';
import './App.css';
import { useState } from "react";
//   component name        // file name
import { Welcome, double } from "./Welcome";  // e.g for named import
import { Msg } from './Msg';
import { AddColor } from './AddColor';
import { MovieList } from './MovieList';
import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
import { Routes, Route, Link , Navigate} from "react-router-dom";


console.log(double(10));
console.log(double(20));
console.log(double(100));


// app (parent) - component
// parent -> child (props)
function App() {
  const names = ["Narasimha", "Subi", "Veer", "Kamala"];
  const users = [
    {
      name: "Sara",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU"
    },
    {
      name: "Tina",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU"
    },
    {
      name: "Kajal",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrR1QgdaFVmP3uVbCdkh13ZEa6o8Zt4UY9A&usqp=CAU"
    },
    {
      name: "Shree",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU"
    },
  ]
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  return (
    <div className="App">
           {/* {names.map(nm => <Welcome name={nm} />)} */}
      {/*users.map(usr=><Msg name="Sara" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU" */}
      {/* {users.map(usr => <Msg name={usr.name} pic={usr.pic} />)} */}
      {/* component calling */}
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><a href="/movies">Movies with Anchor</a></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/color-game">Color game</Link></li>
      </ul>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies"/>} />
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <MovieList movieList={movieList} setMovieList={setMovieList} /> */}
      {/* <AddColor /> */}
    </div>
  );
}

function Home()
{
  return(
    <div>
      <h1> Welcome to Movie App 😃😃😃😃😃😃😃😃😃</h1>
    </div>
  );
}

function NotFound(){
  return(
    <div>
      <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSo6tt4h3jGi0_r6vrB-4nDvpjpIa2CTMy4A&usqp=CAU" 
      alt="404 not found"
       className="not-found" />
    </div>
  )
}

export default App; // default export


