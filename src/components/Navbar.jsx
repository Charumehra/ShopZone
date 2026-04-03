import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="h-16 backdrop-blur-md bg-black/40 border-b border-white/10 fixed top-0 z-50 w-full px-6 md:px-8 flex justify-between items-center">
      <Link
        to="/"
        className="text-white font-black uppercase tracking-tighter italic text-lg md:text-xl"
      >
        Shop<span className="text-purple-500">Zone</span>
      </Link>

      <div className="flex items-center gap-6 md:gap-8">
        <Link
          to="/shop"
          className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:text-purple-400 transition"
        >
          Product
        </Link>
        <Link
          to="/contact"
          className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:text-purple-400 transition"
        >
          Contact
        </Link>
        <Link
          to="/cart"
          className="relative text-white hover:text-purple-400 transition"
        >
          <ShoppingCart size={20} />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
