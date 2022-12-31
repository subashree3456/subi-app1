import logo from './logo.svg';
import './App.css';
import { useState } from "react";
//   component name        // file name
import { Welcome, double } from "./Welcome";  // e.g for named import
import { Msg } from './Msg';
import { AddColor } from './AddColor';
import { MovieList } from './MovieList';
import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import AddMovie from './AddMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
//import { createTheme, Paper, ThemeProvider } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { MovieDetail } from './MovieDetail';
import { BasicForm } from './BasicForm';

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
  // const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);


  const [mode, setMode] = useState("dark");

  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();
  return (

    <ThemeProvider theme={themeCtx}>
      {/* <Paper elevation={4} > */}
      <Paper elevation={4}
        sx={{
          minHeight: "100vh",
          borderRadius: 0
        }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>Add Movies</Button>
              <Button
                // sx={{
                //   marginLeft :"auto",
                // }}
                color="inherit" onClick={() => navigate("/color-game")}>Color Game</Button>
              <Button
                sx={{
                  marginLeft: "auto",
                }}
                startIcon={(mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />)}
                color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "dark" : "light"}
                mode
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            {/* <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} /> old coding*/}
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/color-game" element={<AddColor />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/basic-form" element={<BasicForm />} />
            {/* /movies/101 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App; // default export

{/* <Button color="inherit" onClick={()=> setMode("dark")}>Light Mode</Button> */ }

