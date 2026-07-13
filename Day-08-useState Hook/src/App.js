import { useState } from "react";

function App() {
   const [count,setCount] = useState(0)
  return (
    <div>
      <h1>useState</h1>
      <h2>Count : {count}</h2>
       <button onClick={()=>setCount(count+1)}>
        Count</button>
    </div>
  );
}

export default App;