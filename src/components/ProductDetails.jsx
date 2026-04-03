import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const isInCart = cart.some((item) => item.id === Number(id));

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);

        const relatedRes = await fetch(`https://dummyjson.com/products/category/${data.category}?limit=5`);
        const relatedData = await relatedRes.json();
        const filtered = relatedData.products.filter(p => p.id !== Number(id));
        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) return <div className="h-screen bg-black flex items-center justify-center text-white font-black uppercase tracking-[0.5em] text-[10px]">Loading...</div>;
  if (!product) return <div className="h-screen bg-black text-white flex items-center justify-center font-black uppercase tracking-[0.5em] text-[10px]">Product not found.</div>;

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-28 pb-20 px-8 selection:bg-purple-500/30">
      <main className="max-w-6xl mx-auto">
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-32">
          
          <div className="lg:col-span-2 bg-[#111] border border-white/5 p-16 rounded-sm overflow-hidden aspect-square flex items-center justify-center relative shadow-2xl">
            <div className="absolute inset-0 bg-purple-500/5 opacity-50 blur-[80px]"></div>
            
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="max-h-75 w-auto object-contain relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
            />
          </div>

          <div className="lg:col-span-3 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="text-purple-500 text-[10px] font-black uppercase tracking-[0.3em]">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent leading-none">
                {product.title}
              </h1>
            </div>
            
            <p className="text-3xl font-mono text-white tracking-tighter">${product.price}</p>
            <p className="text-gray-500 leading-relaxed text-sm max-w-xl font-medium">{product.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}
                className={`w-full py-5 text-[10px] font-black uppercase tracking-[0.4em] transition-all active:scale-95 shadow-2xl ${isInCart ? 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white' : 'bg-white text-black hover:bg-gray-200'}`}
              >
                {isInCart ? "Remove from Bag" : "Add to Cart"}
              </button>
              
              <button className="w-full sm:w-auto px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] bg-transparent border border-white/10 text-gray-500 hover:border-white/30 hover:text-white transition-all active:scale-95">
                Save
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="border-t border-white/5 pt-20">
            <h2 className="text-xl font-black uppercase italic tracking-tighter mb-12">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group block">
                  <div className="aspect-square bg-[#111] border border-white/5 p-6 mb-4 overflow-hidden relative rounded-sm">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000 p-2 grayscale-[0.3] group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-white text-[10px] font-bold uppercase tracking-widest truncate opacity-80 group-hover:opacity-100 transition-opacity">{item.title}</h3>
                  <p className="text-purple-400 font-mono text-xs mt-1 opacity-80 group-hover:opacity-100 transition-opacity">${item.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default ProductDetails;
