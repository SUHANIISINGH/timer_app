import { useState , useEffect } from "react"
const Timer=()=>{
    const [ counter , setCounter] = useState(0)
    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            setCounter(previousValue => previousValue+1)
        },1000)

        return () =>{
            console.log("timer component unmounted")
            clearInterval(timeInterval);

        }

    },[])
    return (
        <div>
            <h1>{counter} Seconds</h1>
        </div>
    )
}

export default Timer