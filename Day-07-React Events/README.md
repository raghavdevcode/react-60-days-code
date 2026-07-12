# 🚀 React Series - Day 7

## 📚 Topic

React Events (onClick)

## What are Events?

Events allow us to respond to user actions like clicks, typing, and form submissions.

## Example

```jsx
function App() {
  const showMessage = () => {
    alert("Button Clicked! 🚀");
  };

  return (
    <button onClick={showMessage}>
      Click Me
    </button>
  );
}
```

## Run Project

```bash
npm install
npm start
```

Instagram: @codewithbhanot