# 🚀 React Series - Day 12

## Topic

React Forms (Controlled Components)

## Code

```jsx
const [name, setName] = useState("");

<input
  type="text"
  onChange={(e) => setName(e.target.value)}
/>

<h2>Hello {name}</h2>
```

## Run

```bash
npm start
```