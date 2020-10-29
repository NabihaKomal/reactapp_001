import React, { useState } from 'react';
import './room.css'


function Room() {
//const state = React.useState(true);
//console.log("State = ",state);
let [isLit, setLit] = useState(true);
let[age , setAge] = useState(23);
const brightness = isLit ? "lit" : "dark";

//let hello = 'hello '+ isLit +'World'
//There is a new way of writing a string
//let hello = 'hello '+ ${isLit} +'World'

/*function updateLit(){
    console.log("Button clicked");
    setLit(!isLit);
}*/
const increaseAge= ()=>{
    console.log("Increase Age Button clicked");
    setAge(++age);
    //isLit = !isLit;
}
return(
    //<div className={'room ${isLit?"lit":"dark"}'}>
    <div className={`room ${brightness}`}>
    This Room is {isLit?"lit":"dark"}
    <br/>
    Age = {age}
    <br/>
    <button onClick={()=> setLit(!isLit)}>Toggle Light</button>
    <br/>
    <button onClick={()=>{
                console.log("Increase Age Arrow Function");
                setAge(++age);
                }}>
        Increase Age
    </button>
</div>
); 

}

export default Room;
