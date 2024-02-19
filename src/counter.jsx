import { useState } from "react";

function Counter(props){
    const [value, setCount] = useState(props.value);
    function increment(){
        setCount(value+1)
    }
    function decrement(){
        setCount(value-1)
    }
    return(
    <div>
        <h3>{value}</h3>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
    </div>
    )
}
export default Counter