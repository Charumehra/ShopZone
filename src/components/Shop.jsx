import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter((item) => {
      const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "all" || item.category === category;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-red-500">
        Failed to load products 😢
      </div>
    );
  }

  return (
    <div className='bg-[#050505] min-h-screen pt-24 pb-20 selection:bg-purple-500/30'>
      <div className="max-w-7xl mx-auto px-8">

        <header className="mb-10 text-center">
          <h1 className="text-5xl font-black text-white mb-2 uppercase italic tracking-tighter">
            The Collections
          </h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold">
            New Arrivals / Spring 2026
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 bg-black border border-white/20 text-white w-full outline-none focus:border-white/40 transition-all"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 bg-black border border-white/20 text-white outline-none focus:border-white/40 transition-all"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="p-3 bg-black border border-white/20 text-white outline-none focus:border-white/40 transition-all"
          >
            <option value="">Sort</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            No products found 😢
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => {
            const inCart = isInCart(item.id);

            return (
              <div key={item.id} className="group bg-[#111] border border-white/5 flex flex-col">
                <Link to={`/product/${item.id}`} className="aspect-square overflow-hidden bg-black flex items-center justify-center">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-contain grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
                  />
                </Link>

                <div className="p-6 bg-black grow flex flex-col">
                  <div className="flex justify-between mb-6">
                    <h2 className="text-white text-[11px] font-bold uppercase tracking-widest truncate">
                      {item.title}
                    </h2>
                    <span className="text-purple-400 font-mono text-xs">
                      ${item.price}
                    </span>
                  </div>

                  <button 
                    onClick={() => inCart ? removeFromCart(item.id) : addToCart(item)}
                    className={`w-full py-4 text-[9px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
                      inCart 
                        ? 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white' 
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {inCart ? 'Remove Item' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;