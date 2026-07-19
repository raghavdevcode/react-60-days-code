function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted 🚀");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;