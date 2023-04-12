import { useState , useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { navigate , useNavigate , useParams} from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";

// name - required//
// poster - min 4, required
// rating - 0 - 10, required
// summary - min 20 chars, required
// trailer - min 4, required
const movieValidationSchema = yup.object({
    name : yup.string().required("why cant you fill name for the movie 😄😃😄"),
    poster : yup.string().min(4  ,"Need a stronger poster name 😄😃😄").required("why not fill this poster 😃"),
    rating : yup.number().min(0).max(10).required("why not fill this rating 😃"),
    summary : yup.string().min(20  ,"Need a stronger summary😄😃😄").required("why not fill this summary 😃"),
    trailer : yup.string().min(4  ,"Need a stronger trailer 😄😃😄").required("why not fill this trailer 😃"),
});
export function EditMovie() {
    
//id
const { id } = useParams();
console.log(useParams());
const [movie, setMovie] = useState(null);
const getMovie = () => {
    fetch(`https://636fd102f957096d513c8489.mockapi.io/newmovies/${id}`, {
        method: "GET",
    })
        .then(data => data.json())
        // .then(mvs => console.log(mv));
        .then(mv => setMovie(mv));
};

useEffect(() => getMovie(), []); // intha line kodukalena array of object ta console aaaguthu

// console.log(movie);
return (
    <div>
      {/* {movie ?  <EditMovieForm movie={movie}/> : null} */}
      {movie ?  <EditMovieForm movie={movie}/> : <p> Loading....</p>}
    </div>
)
    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState("");
    // const [rating, setRating] = useState("");
    // const [summary, setSummary] = useState("");
    // const [trailer, setTrailer] = useState("");
}


function EditMovieForm ({movie}) {

    const formik = useFormik({
        initialValues :{
            name:movie.name,
            poster:movie.poster,
            rating:movie.rating,
            summary:movie.summary,
            trailer :movie.trailer,
        } ,
        // validation schema:

        validationSchema : movieValidationSchema,
        onSubmit : (updatedMovie) =>{
            console.log("The form values are " , updatedMovie);
            updateMovie(updatedMovie);
        },
    });


const navigate = useNavigate();
    // below lines is to reduce line number 144
    const updateMovie = (updatedMovie) => {
        // const newMovie = {
        //     name: name,
        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        // };
        console.log(updatedMovie);
        { /* create a copy of movielist and add new movie  to it */ }
        // setmovielist is not available here so propss sa app componentlenthu varum
        // setMovieList([...movieList, newMovie]);
        // Post Method - fetch
        // 1.method - PUT & id
        // 2.Data (updatedMovie) - body & JSON
        // 3.Haeder - JSON


        fetch(`https://636fd102f957096d513c8489.mockapi.io/newmovies/${movie.id}`,{
            method : "PUT" , 
            body : JSON.stringify(updatedMovie) ,
            headers: {"Content-Type": "application/json",
        },         
        // }).then(data => data.json());
    }).then(()=> navigate("/movies"));
    };
    return (
        <form onSubmit={formik.handleSubmit} className="add-movie-container" >
            {/* material ui coding starts */}
            {/* <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} value={name} /> */}
            {/* {name} */}
            {/* no need of id: outlined basic  */}
            <TextField id="outlined-basic" label="Name" variant="outlined" name ="name"value={formik.values.name} 
             onChange={formik.handleChange}
             onBlur ={formik.handleBlur}
             error={formik.touched.name && formik.errors.name}
             helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
             />
               {movie.name}
             {/* {formik.touched.name && formik.errors.name ? formik.errors.name : null} */}

            <TextField id="outlined-basic" label="Poster" variant="outlined" name="poster" value={formik.values.poster} 
            onChange={formik.handleChange}
            onBlur ={formik.handleBlur}
            error={formik.touched.poster && formik.errors.poster}
            helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}  />            

      <TextField id="outlined-basic" label="Rating" variant="outlined" name="rating" value={formik.values.rating} 
            onChange={formik.handleChange}
            onBlur ={formik.handleBlur}
            error={formik.touched.rating && formik.errors.rating}
            helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null} />

            

<TextField id="outlined-basic" label="Summary" variant="outlined" name="summary" value={formik.values.summary} 
            onChange={formik.handleChange}
            onBlur ={formik.handleBlur}
            error={formik.touched.summary && formik.errors.summary}
            helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}   />



<TextField id="outlined-basic" label="Trailer" variant="outlined" name="trailer" value={formik.values.trailer} 
            onChange={formik.handleChange}
            onBlur ={formik.handleBlur} 
            error={formik.touched.trailer && formik.errors.trailer}
            helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer  : null}    />

            {/* <p> {name} {poster} {rating} {summary}</p> */}
            {/* material ui coding starts */}
            <Button type="submit" variant="contained" color="success"> SAVE </Button>
        </form>

    );
}

export default EditMovie;