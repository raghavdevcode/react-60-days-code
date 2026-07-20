# 🚀 React Series - Day 15

## 📚 Topic

Live Character Counter

## Code

```jsx
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>Characters: {text.length}</h2>
    </div>
  );
}
```

## Run

```bash
npm install
npm start
```