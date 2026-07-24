import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const getStrength = () => {
    if (password.length === 0)
      return {
        text: "",
        color: "",
        width: "0%",
      };

    if (password.length < 6)
      return {
        text: "Weak ❌",
        color: "#ff4d4d",
        width: "33%",
      };

    if (password.length < 10)
      return {
        text: "Medium 🟡",
        color: "#ff9800",
        width: "66%",
      };

    return {
      text: "Strong ✅",
      color: "#28a745",
      width: "100%",
    };
  };

  const strength = getStrength();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Password Strength Checker</h2>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginTop: "10px",
          }}
        />

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#ddd",
            borderRadius: "10px",
            marginTop: "15px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: strength.width,
              height: "100%",
              background: strength.color,
              transition: "0.4s",
            }}
          ></div>
        </div>

        <h3
          style={{
            color: strength.color,
            marginTop: "15px",
            transition: "0.4s",
          }}
        >
          {strength.text}
        </h3>
      </div>
    </div>
  );
}

export default App;