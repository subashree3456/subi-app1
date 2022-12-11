import { useState } from "react";
import { ColorBox } from './ColorBox';

export function AddColor() {
    // const styles ={
    //   background:"red",
    // };
    const [color, setColor] = useState("pink");
    const styles = {
        background: color,
    };
    const [colorList, setColorList] = useState(["teal", "crimson", "orange"]);
    return (
        <div>
            {/* typing -> onchange -> capturing event.target.value -> setcolor -> inform react */}
            {/* <input style={styles} type="text" onChange={(event)=> console.log(event.target.value)}/> */}
            <input style={styles}
                type="text"
                onChange={(event) => setColor(event.target.value)}
                value={color} />
            {/* {color} */}
            {/* create a copy of colorlist and add new color to it */}
            <button onClick={() => setColorList([...colorList, color])}> Add Color </button>
            {colorList.map((clr) => <ColorBox clr={clr} />)}
            {/* <ColorBox clr="crimson"/>
          <ColorBox clr="skyblue"/> */}
        </div>
    );
}