import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component Loaded 🚀");
  }, []);

  return (
    <div>
      <h1>React useEffect Hook</h1>
    </div>
  );
}

export default App;