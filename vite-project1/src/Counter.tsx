import { useState } from "react"
// counter value not in nagative & not greater in 20
const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    return(
        <>
            <h1>Counter value: {counter}</h1>
            <button onClick={ () => { counter >= 20 ? setCounter(20) : setCounter(counter + 1) }}>Add Value</button>
            <button onClick={ () => { counter <= 0 ? setCounter(0) : setCounter(counter - 1) }}>Remove Value</button>
        </>

    )
}

export default Counter;