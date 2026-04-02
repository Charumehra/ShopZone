import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => alert("Fetch error:", err));
  }, [id]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=6`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.products.filter(
          (item) => item.id !== Number(id)
        );
        setOtherProducts(filtered);
      });
  }, [id]);

  if (!product)
    return (
      <div className="bg-black h-screen flex items-center justify-center text-white">
        <p className="animate-pulse">Loading product details...</p>
      </div>
    );

  return (
    <div className="bg-black min-h-screen text-white p-6 md:p-16">
      
      <Link
        to="/shop"
        className="text-gray-500 hover:text-white mb-8 inline-block"
      >
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 flex flex-col md:flex-row gap-10">
          
          <div className="w-full md:w-1/2 bg-white rounded-3xl p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex-1">
            <span className="text-pink-500 uppercase text-sm">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold mt-2">
              {product.title}
            </h1>

            <p className="text-2xl text-green-400 mt-4">
              ${product.price}
            </p>

            <p className="text-gray-400 mt-4">
              {product.description}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-8 bg-white text-black px-8 py-3 rounded-full hover:bg-pink-500 hover:text-white"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">Other Products</h2>

          <div className="space-y-4 max-h-125 overflow-y-auto">
            {otherProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="flex gap-3 bg-black p-3 rounded-xl hover:bg-gray-800 transition"
              >
                <img
                  src={item.thumbnail}
                  className="w-16 h-16 object-cover rounded-lg"
                  alt={item.title}
                />

                <div>
                  <p className="text-sm font-semibold line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-green-400 text-sm">
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
