import { Counter } from "./Counter";

// component declaration object destrcturing
export function Msg({ pic, name }) {
    // console.log(props);
    // const {name  , pic} =props; // object destructuring and we are using this to avoid props.name , props.pic in below lines
    return (
        <div className="user-container">
            <img className="profile-pic"
                src={pic}
                alt={name} />
            <h1> Hello , {name} </h1>
            <Counter />
        </div>
    );
}