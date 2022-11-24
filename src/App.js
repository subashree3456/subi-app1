import logo from './logo.svg';
import './App.css';
import { useState } from "react";

// app (parent) - component
// parent -> child (props)
function App() {
  const names=["Narasimha","Subi","Veer", "Kamala"];
  const users=[
  { name:"Sara" ,
  pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU" },
  { name:"Tina", 
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU"},
  { name:"Kajal" ,
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrR1QgdaFVmP3uVbCdkh13ZEa6o8Zt4UY9A&usqp=CAU"},
    { name:"Shree", 
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU"},
  ]
  return (
    <div className="App">
      {/* <Msg name="Sara" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU" />
      <Msg  name="Tina" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU"/>
      <Msg  name="Kajal" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrR1QgdaFVmP3uVbCdkh13ZEa6o8Zt4UY9A&usqp=CAU"/>
    
  */}   
   {/* <Welcome name="Sara" />
      <Welcome   name="Tina"/>
<Welcome  name="Kajal" /> */}
    
 {/*  {names.map(nm=> <Welcome name={nm} /> )} */}
 {/*users.map(usr=><Msg name="Sara" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU" */ }
  {users.map(usr=><Msg name={usr.name} pic={usr.pic} />)} 
     </div>
  );
}

// component declaration
function Welcome({name}) {
  //console.log(props);
 // const {name  , pic} =props; // object destructuring and we are using this to avoid props.name , props.pic in below lines
  return (
    <div className="App">      
   <h1> Hello , {name} </h1>
   </div>
  );
}

function Msg({pic, name}) {
  // console.log(props);
  // const {name  , pic} =props; // object destructuring and we are using this to avoid props.name , props.pic in below lines
   return (
     <div className="user-container">
       <img className="profile-pic"
       src={pic} 
       alt={name} />
    <h1> Hello , {name} </h1>
    <Counter/>
    </div>
   );
 }

 function Counter()
 {
 // let like=10;
  const [like , setLike] =useState(0);
  const [dislike , setDislike] =useState(0);
  return(
    <div>
<button onClick={()=>setLike(like+1)
//console.log(like);
}>  {like} </button>
<button onClick={()=>setDislike(dislike+1)}>  {dislike} </button>
{/* <h2> {like}</h2>
<h2> {like}</h2>
<h2> {like}</h2> */}
    </div>
  );
 }

export default App;


// function double(n){
//   return n*2;
// }

// double(10);
// double(20);
// double(30);

// component declaration
// function Msg(props) {
//   console.log(props);
//   const name="Subi";
//   return (
//     <div className="App">
//       <img className="profile-pic"
//       src={props.pic} 
//       alt={props.name} />
//    <h1> Hello , {props.name} </h1>
//    </div>
//   );
// }

// component declaration
// function Msg(props) {
//   console.log(props);
//   const {name  , pic} =props; // object destructuring and we are using this to avoid props.name , props.pic in below lines
//   return (
//     <div className="App">
//       <img className="profile-pic"
//       src={pic} 
//       alt={name} />
//    <h1> Hello , {name} </h1>
//    </div>
//   );
// }



/////-----------------------

