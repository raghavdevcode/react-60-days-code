# 🚀 React Series - Day 6

## 📚 Topic

Props in React

## What are Props?

Props are used to pass data from a parent component to a child component.

## Example

```jsx
<Greeting name="Raghav" />
<Greeting name="Rahul" />
<Greeting name="Aman" />
```

```jsx
function Greeting(props) {
  return <h2>Welcome {props.name} 🚀</h2>;
}
```

## Run Project

```bash
npm install
npm start
```

Instagram: @codewithbhanot