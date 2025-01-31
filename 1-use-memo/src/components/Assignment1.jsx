import { useState,useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);

    const [abc,setAbc]=useState(0)


    // Your solution starts here
    const expensiveValue =useMemo(()=>{
        let count=0;
        for(let i=1;i<=input;i++){
            count=count+i;
        }
        return count;
    },[input])
    // Your solution ends here

    const check=useMemo(()=>{return Math.random()*10},[abc])


    return (
        <div>
            <div><input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Updated/rerendered on input change-Calculated Value: {expensiveValue}</p>
            </div>
            <p>Updated/rerendered on clicking button-{check}</p>
            <button onClick={()=>{setAbc(abc+1)}}>Click {abc}</button>
        </div>
    );
}