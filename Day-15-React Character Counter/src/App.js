import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>Characters: {text.length}</h2>
    </div>
  );
}

export default App;