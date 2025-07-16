import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const countChange = () => {
        setCount(prevCounter => prevCounter + 1)
        setCount(prevCounter => prevCounter + 1)
    }

    return(
        <>
            <h2>{count}</h2>
            <button onClick={countChange} className="bg-amber-400 p-2 rounded cursor-pointer">Increse Count</button>
        </>
    )
}

export default Counter;