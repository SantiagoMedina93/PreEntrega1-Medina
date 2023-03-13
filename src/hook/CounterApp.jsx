import { useState } from "react";
import './styles.css'

export const CounterApp = ({precio,cantidad}) => {
    
    const [counter,setCounter] = useState(1);
    
    const decrement = () => {
        if (counter > 1) {
            setCounter( counter - 1 )
        }
    }

    const increment = () =>{
        if (counter < cantidad) {
            setCounter( counter + 1 )
        }
    }

    return (
        <>  
            <div className="counter">
                <button onClick={decrement}>
                    -1
                </button>
                <h2>{counter}</h2>
                <button onClick={increment}>
                    +1
                </button>
            </div>
            
            <h2>Total: ${ counter * precio }</h2>
            
        </>
    )
};