import { useState } from "react";
import { Counter } from './Counter';

//component declaration
export function Movie({ movie }) {
    // const movie=
    //   // { name: "Vikram",
    //   //   poster:
    //   //   "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    //   //   rating: 8.4,
    //   //   summary:
    //   //   "Members of a black ops team must track and eliminate a gang of masked murderers.",
    //   //   } 
    // conditional styling 
    const styles = {
        color: movie.rating > 8.5 ? "green" : "red",
    };
    const [show, setShow] = useState(true);
    return (
        <div className="movie-container">
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <div className="movie-specs">
                <h3 className="movie-name">{movie.name}</h3>
                <p style={styles} className="movie-rating">🌟{movie.rating}</p>
            </div>
            <button onClick={() => setShow(!show)}> Toggle summary </button> {/* {show + " "} */}
            {/* conditional rendering*/}
            {show ? <p className="movie-summary"> {movie.summary}</p> : null}
            <Counter />
        </div>
    );
}
