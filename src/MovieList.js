import { Movie } from './Movie';
import {useState , useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export function MovieList() {

    const [movieList, setMovieList] = useState([]);

    const getMovies =() => {
        fetch("https://636fd102f957096d513c8489.mockapi.io/newmovies",{
            method : "GET" , 
        })
        .then(data => data.json())
        // .then(mvs => console.log(mvs));
        .then(mvs => setMovieList(mvs)); 
      };

    useEffect(()=> getMovies(), []);

const deleteMovie = (id) =>{
 {/*console.log("Deleting Moviee..... ",id)  */}
 //Delete -> Refresh data (refetch)
 fetch(`https://636fd102f957096d513c8489.mockapi.io/newmovies/${id}`, {
    method : "DELETE" ,    
 }).then (() => getMovies()); // to avoid reloading the page after deletion
};
    return (
        <div>
            <div className="movie-list">
                {movieList.map((mv) => (
                    <Movie 
                    movie={mv} 
                    deleteButton={
                    <IconButton 
                    color="error"
                    onClick={()  => deleteMovie(mv.id)}
                    aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    }/>
                ))}
            </div>
        </div>
    );
}



