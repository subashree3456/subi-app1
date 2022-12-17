import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
    // let like=10;
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);
    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setDisLike(disLike + 1);


    // without dependency array
// useEffect(() =>
// {
// console.log("Like Value is Updated" , like);
// });
// with dependency array
// useEffect(() =>
// {
// console.log("Like Value is Updated" , like);
// } , [like]);

useEffect(() =>
{
console.log("Like Value is Updated" , like);
} , [like , disLike]);

    return (
        <div>
            <Badge badgeContent={like} color="primary">
            <IconButton onClick={incrementLike} color="primary" aria-label="Movie Like Button"> 👍  </IconButton>
            </Badge>
             <Badge badgeContent={disLike} color="error">
<IconButton onClick={incrementDisLike} color="error" aria-label="Movie DisLike Button"> 👎</IconButton>  
</Badge>           
 </div>
    );
}


// old codings
{/* <div>
            <button onClick={incrementLike}> 👍 {like} </button>
            <button onClick={()=>setLike(like+1)
            console.log(like);
            }> 👍 {like} </button>
            <button onClick={incrementDisLike}>  👎{disLike} </button>
            <h2> {like}</h2>
            <h2> {like}</h2>
            <h2> {like}</h2>
        </div> */}