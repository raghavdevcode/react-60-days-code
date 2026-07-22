import { useState } from "react";

function App() {
  
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "#121212" : "#ffffff",
        color: dark ? "#ffffff" : "#000000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;