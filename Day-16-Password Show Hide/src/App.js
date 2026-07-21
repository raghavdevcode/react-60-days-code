import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      /> &nbsp;

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;