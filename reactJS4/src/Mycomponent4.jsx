 import { useState,useEffect } from "react";


 function Mycomponent4(){


    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green")

    useEffect(() => {
        document.title = `count: ${count} ${color}`;
    }, [count]);// side code 
    // it keeps a code organized
    

    function addCount(){
        setCount(c=> c+1);
    }

    function substractCount(){
        setCount(c=> c-1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");

    }

    return(<>
        <p style = {{color: color}}>count: {count}</p>
        <button onClick={addCount}>add</button>
        <button onClick={substractCount}>substract</button>
        <br />
        <button onClick={changeColor}>change color</button>

        </>
    )
 }
 export default Mycomponent4