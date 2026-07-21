# 🚀 React Series - Day 16

## 📚 Topic

Password Show/Hide

## Code

```jsx
const [showPassword, setShowPassword] = useState(false);

<input type={showPassword ? "text" : "password"} />

<button onClick={() => setShowPassword(!showPassword)}>
  {showPassword ? "Hide" : "Show"}
</button>
```

## Run

```bash
npm install
npm start
```