import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { navigate , useNavigate} from "react-router-dom";

function AddMovie() {
    
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");
const navigate = useNavigate();
    // below lines is to reduce line number 144
    const addMovie = () => {
        const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
        };
        console.log(newMovie);
        { /* create a copy of movielist and add new movie  to it */ }
        // setmovielist is not available here so propss sa app componentlenthu varum
        // setMovieList([...movieList, newMovie]);
        // Post Method - fetch
        // 1.method - POST
        // 2.Data (newMovie) - body & JSON
        // 3.Haeder - json


        fetch("https://636fd102f957096d513c8489.mockapi.io/newmovies",{
            method : "POST" , 
            body : JSON.stringify(newMovie) ,
            headers: {"Content-Type": "application/json",
        },         
        // }).then(data => data.json());
    }).then(()=> navigate("/movies"));
    };
    return (
        <div className="add-movie-container">
            {/* material ui coding starts */}
            {/* <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} value={name} /> */}
            {/* {name} */}
            {/* no need of id: outlined basic  */}
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} value={name} />
            <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} value={poster} />
            <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} value={rating} />
            <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} value={summary} />
            <TextField id="outlined-basic" label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} value={trailer} />
            {/* <p> {name} {poster} {rating} {summary}</p> */}
            {/* material ui coding starts */}
            <Button onClick={addMovie} variant="contained"> Add Movie</Button>
        </div>

    );
}


export default AddMovie;
