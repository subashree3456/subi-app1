// component declaration
// named export
function Welcome({name}) {
  //console.log(props);
 // const {name  , pic} =props; // object destructuring and we are using this to avoid props.name , props.pic in below lines
  return (
    <div className="App">      
   <h1> Hello , {name} </h1>
   </div>
  );
}

// export function Welcome ({name})
function double(n){
return n*2;
}

export {Welcome , double};