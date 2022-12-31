import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { navigate , useNavigate} from "react-router-dom";
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
export function AddMovie() {
    
    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState("");
    // const [rating, setRating] = useState("");
    // const [summary, setSummary] = useState("");
    // const [trailer, setTrailer] = useState("");


    const formik = useFormik({
        initialValues :{
            name:"",
            poster:"",
            rating: "",
            summary: "",
            trailer : "",
        } ,
        // validation schema:

        validationSchema : movieValidationSchema,
        onSubmit : (newMovie) =>{
            console.log("The form values are " , newMovie);
            addMovie(newMovie);
        },
    });


const navigate = useNavigate();
    // below lines is to reduce line number 144
    const addMovie = (newMovie) => {
        // const newMovie = {
        //     name: name,
        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        // };
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
        <form onSubmit={formik.handleSubmit} className="add-movie-container" >
            {/* material ui coding starts */}
            {/* <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} value={name} /> */}
            {/* {name} */}
            {/* no need of id: outlined basic  */}
            <TextField id="outlined-basic" label="Name" variant="outlined" name ="name"value={formik.values.name} 
             onChange={formik.handleChange}
             onBlur ={formik.handleBlur}  />

             {formik.touched.name && formik.errors.name ? formik.errors.name : null}

            <TextField id="outlined-basic" label="Poster" variant="outlined" name="poster" value={formik.values.poster} 
            onChange={formik.handleChange}
            onBlur ={formik.handleBlur} />

            {formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}

      <TextField id="outlined-basic" label="Rating" variant="outlined" name="rating" value={formik.values.rating} 
            onChange={formik.handleChange}
            onBlur ={formik.handleBlur} />

            {formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}

<TextField id="outlined-basic" label="Summary" variant="outlined" name="summary" value={formik.values.summary} 
            onChange={formik.handleChange}
            onBlur ={formik.handleBlur} />

{formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}

<TextField id="outlined-basic" label="Trailer" variant="outlined" name="trailer" value={formik.values.trailer} 
            onChange={formik.handleChange}
            onBlur ={formik.handleBlur} />

{formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer  : null}

            {/* <p> {name} {poster} {rating} {summary}</p> */}
            {/* material ui coding starts */}
            <Button type="submit" variant="contained"> Add Movie</Button>
        </form>

    );
}


export default AddMovie;