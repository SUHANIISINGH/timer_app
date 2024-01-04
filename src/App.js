import {useState } from "react";
import Timer from "./components/Timer"
const App=()=> {
  const[toggle , setToggle] = useState(false)
  return (
      <div>
        {toggle ? <p>Alternate component</p> : <Timer/>}
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      </div>

  );
}

export default App;