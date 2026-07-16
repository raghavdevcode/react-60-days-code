# 🚀 React Series - Day 11

## Topic
React Lists & map()

## Code

```jsx
const courses = ["React", "Node.js", "MongoDB"];

{courses.map((course, index) => (
  <h2 key={index}>{course}</h2>
))}
```

Run:
```bash
npm start
```