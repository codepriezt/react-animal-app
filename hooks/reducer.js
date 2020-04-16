import React ,{useReducer } from 'react';


//logic to make sure the number is between 0 and 255

const limitRGB = num => (num < 0 ? 0 : num  > 255 ?  255 : num );

 const step = 50;

 //a reducer is basically a function that takes in an old state, dome sort of action and return to a new state..basically a call signature


const reducer = (state , action) => {

    switch(action.type){
         case "INCREMENT R":
         return Object.assign({} , state , { r: limitRGB(state.r + step)})

         case "INCREMENT R":
            return Object.assign({} , state , { r: limitRGB(state.r + step)})

            
                case "INCREMENT G":
                    return Object.assign({} , state , { g: limitRGB(state.g + step)})

                    case "DECREMENT G":
                        return Object.assign({} , state , { g: limitRGB(state.g + step)})


                        case "INCREMENT B":
                            return Object.assign({} , state , { b: limitRGB(state.b + step)})

                            case "DECREMENT B":
                                return Object.assign({} , state , { b: limitRGB(state.b + step)})

                    default:
                        return state;
                                
    }



    const ReducerComponent = () => {
        const [{r , g , b} , dispatch]  = useReducer(reducer , { r :0, g: 0 , b : 0})

        return (
            <div>
            <h1 style={{ color: `rgba(${r} , ${g} , ${b})`}}> useReducer Example</h1>

            <div>
                <span>r</span>
                    <button onClick={() => dispatch({type: "INCREMENT_R"})}>+</button>
                    <button onClick={() => dispatch({type: "DECREMENT_R"})}>-</button>       
            </div>

            <div>
                <span>r</span>
                    <button onClick={() => dispatch({type: "INCREMENT_G"})}>+</button>
                    <button onClick={() => dispatch({type: "DECREMENT_G"})}>-</button>       
            </div>

            <div>
                <span>r</span>
                    <button onClick={() => dispatch({type: "INCREMENT_B"})}>+</button>
                    <button onClick={() => dispatch({type: "DECREMENT_B"})}>-</button>       
            </div>
         </div>
        )
    }
}