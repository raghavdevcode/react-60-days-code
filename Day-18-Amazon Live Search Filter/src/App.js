import { useState } from "react";

function App() {
  const products = [
    "iPhone 16",
    "Samsung S25",
    "Boat Headphones",
    "Dell Laptop",
    "HP Laptop",
    "iPad Air",
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Amazon Search</h2>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((product, index) => (
        <p key={index}>{product}</p>
      ))}
    </div>
  );
}

export default App;