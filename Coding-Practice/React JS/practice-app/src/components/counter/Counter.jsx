import { useEffect, useState } from "react"


function Counter() {
    const [count, setCount] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let Interval;

        if(running) {
            Interval = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 10);
        }

        return () => {
            clearInterval(Interval)
        }
        
    },[running])

    return (
        <div style={{width:"50%", margin:"0 auto", textAlign:"center"}}>
            <h1>{count}</h1>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => {setRunning(false); setCount(count + 1)}}>End</button>
        </div>
    )
}

export default Counter