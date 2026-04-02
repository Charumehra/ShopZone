import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // optional icon lib
import CartContext from "../context/CartContext";

function Navbar() {
  const {cart} = useContext(CartContext)

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="backdrop-blur-md bg-white/20 shadow-md fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-white">
          ShopZone
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className=" text-white hover:text-blue-500">
            Home
          </Link>

          <Link to="/shop" className=" text-white hover:text-blue-500">
            Shop
          </Link>

          <Link to="/cart" className="relative text-white hover:text-blue-500">
            <ShoppingCart size={24} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-gray-900">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;