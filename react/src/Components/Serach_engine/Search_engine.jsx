import React, { useState, useEffect } from 'react';

const Search_engine = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
          setProducts(data.products);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <form
        onSubmit={handleSearch}
        className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-800">🔍 Product Search</h1>
        <input
          type="text"
          placeholder="Type something..."
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          type="submit"
          className="px-6 py-2 font-semibold text-white bg-amber-600 rounded-lg hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-8 max-w-5xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <p className="text-amber-600 font-bold text-lg mt-2">${product.price}</p>
            </div>
          ))
        ) : (
          query && (
            <div className="text-center col-span-full text-gray-600">
              No results found for "<strong>{query}</strong>"
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Search_engine;
