//in this hook folder .. here i will be learning about hooks ... useState , useEffect , useRef

import React , {useState} from 'react';


const stateComponent = () => {
    const [isGreen , setIsGreen]  = useState(true);

    return (
        <div>
            <h1  onClick={()=> setIsGreen(!isGreen) }
            style={{color:isGreen ? "limegreen" : "crimson" }}
            > 
            useState Example
            </h1>
        </div>
    )
}

export default stateComponent;