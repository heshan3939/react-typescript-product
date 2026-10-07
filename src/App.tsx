function App() {
  const product = {
    id: 10,
    title: "Gucci Bloom Eau de",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
  };

  return (
    <div>
      <h1>{product.id}</h1>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
}

export default App;