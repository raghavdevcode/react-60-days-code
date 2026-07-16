function App() {
  const courses = ["React", "Node.js", "MongoDB"];

  return (
    <div>
      {courses.map((course, index) => (
        <h2 key={index}>{course}</h2>
      ))}
    </div>
  );
}

export default App;