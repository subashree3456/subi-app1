import { useState } from "react";


export function Counter() {
    // let like=10;
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);
    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setDisLike(disLike + 1);
    return (
        <div>
            <button onClick={incrementLike}> 👍 {like} </button>
            {/* <button onClick={()=>setLike(like+1)
            //console.log(like);
            }> 👍 {like} </button> */}
            <button onClick={incrementDisLike}>  👎{disLike} </button>
            {/* <h2> {like}</h2>
            <h2> {like}</h2>
            <h2> {like}</h2> */}
        </div>
    );
}
