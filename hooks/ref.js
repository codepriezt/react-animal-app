import React , {useState , useEffect , createContext , useRef} from "react";


const RefComponent = () => {
    const [stateNumber , setStateNumber] = usestate(0);

    const numRef = useRef(0);


    function incrementAndDelayLogging(){
        setStateNumber(stateNumber + 1);
        numRef.current++;

        setTimeout(
            () => alert(` state: ${stateNumber} | ref : ${numRef.current}`), 1000
        );
    }

    return(

        <div>
            <h1>useRef Examples</h1>
            <button onClick={incrementAndDelayLogging}>
                Delay logging
            </button>
    <h1> state: {stateNumber}</h1>
    <h1> ref: {numRef.current}</h1>
        </div>

    )
}