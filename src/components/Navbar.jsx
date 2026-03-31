import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // optional icon lib

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopZone
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-500">
            Products
          </Link>

          {/* 🔹 Cart Icon with Badge */}
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;