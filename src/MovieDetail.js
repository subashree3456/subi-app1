import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function MovieDetail() {
    //id
    const { id } = useParams();
    console.log(useParams());
    const [movie, setMovie] = useState([]);
    const getMovie = () => {
        fetch(`https://636fd102f957096d513c8489.mockapi.io/newmovies/${id}`, {
            method: "GET",
        })
            .then(data => data.json())
            // .then(mvs => console.log(mv));
            .then(mv => setMovie(mv));
    };

    useEffect(() => getMovie(), []); // intha line kodukalena array of object ta console aaaguthu
    const styles = {
        color: movie.rating > 8.5 ? "green" : "red",
    };

    const navigate = useNavigate();

    return (
        <div>
            <iframe width="100%"
                height="800"
                // src="https://www.youtube.com/embed/BWkP95PazWo" 
                src={movie.trailer}
                title="Love Today Telugu - Official Trailer | @MorattuSingle   | Yuvan Shankar Raja | AGS"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
        picture-in-picture" allowfullscreen>
            </iframe>
            <div className="movie-detail-container">
                <div className="movie-specs">
                    <h3 className="movie-name">{movie.name} </h3>
                    <p style={styles} className="movie-rating">🌟{movie.rating}</p>
                </div>
                <p className="movie-summary">{movie.summary}</p>
                {/* <h1>Movie Detail of  {movie.name}.... 😆😄😅</h1> */}
            </div>
            <button
                onClick={() => navigate(-1)}
            >
                Back</button>
        </div>
    );
}
