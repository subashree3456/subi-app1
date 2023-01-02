import { useState } from "react";
import { Counter } from './Counter';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

// component declaration
export function Movie({ movie , editButton ,deleteButton }) {   
    const styles = {
        color: movie.rating > 8.5 ? "green" : "red",
    };
    const [show, setShow] = useState(true);

    const navigate = useNavigate();
    
    return (
        <card className="movie-container">
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <CardContent>
            <div className="movie-specs">
                <h3 className="movie-name">{movie.name}
                <IconButton 
            onClick={() => setShow(!show)}
            aria-label="delete">
       { show? <ExpandLessIcon/>:<ExpandMoreIcon/>}
      </IconButton>
      <IconButton 
            onClick={() => navigate(`/movies/${movie.id}`)}
            aria-label="delete">
      <InfoIcon />
      </IconButton>
                </h3>
                <p style={styles} className="movie-rating">🌟{movie.rating}</p>
            </div>            
            {show ? <p className="movie-summary"> {movie.summary}</p> : null}
            </CardContent>           
      <CardActions>
            <Counter /> {editButton} {deleteButton}
            </CardActions>    
        </card>
    );
}

// old codings;

//component declaration
// export function Movie({ movie }) {
//     const movie=
//       // { name: "Vikram",
//       //   poster:
//       //   "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//       //   rating: 8.4,
//       //   summary:
//       //   "Members of a black ops team must track and eliminate a gang of masked murderers.",
//       //   } 
//     conditional styling 
//     const styles = {
    // <button onClick={() => setShow(!show)}> Toggle summary </button> {/* {show + " "} */}
            // {/* conditional rendering*/}