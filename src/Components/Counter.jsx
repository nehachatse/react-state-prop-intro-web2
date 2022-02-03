import React from "react"

export default function Counter(props){
    const [counter, setCounter] = React.useState(0);

    return (
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter+1)}>INCREMENT</button>
            <button onClick={() => setCounter(counter-1)}>DECREMENT</button>
            <button onClick={() => setCounter(2*counter)}>DOUBLE</button>
        </>
    )
}