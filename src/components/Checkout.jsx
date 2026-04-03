import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-xl font-light uppercase tracking-widest mb-6">
          Your bag is empty
        </h2>
        <button
          onClick={() => navigate("/shop")}
          className="border border-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-white p-6 text-center">
        <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <span className="text-4xl">✨</span>
        </div>
        <h1 className="text-4xl font-black mb-4 uppercase italic tracking-tighter">
          Order Placed!
        </h1>
        <p className="text-gray-400 mb-10 text-sm uppercase tracking-widest">
          Your items will arrive in 3-5 business days.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-12 py-4 bg-white text-black uppercase text-[10px] font-black tracking-[0.3em] hover:bg-purple-600 hover:text-white transition-all duration-500"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 pt-28 selection:bg-purple-500/30">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-16 italic">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8 border-b border-white/10 pb-2">
                Shipping Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="col-span-1 bg-transparent border border-white/10 p-4 text-[10px] focus:border-purple-500 outline-none transition-all placeholder:text-gray-700"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="col-span-1 bg-transparent border border-white/10 p-4 text-[10px] focus:border-purple-500 outline-none transition-all placeholder:text-gray-700"
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="col-span-2 bg-transparent border border-white/10 p-4 text-[10px] focus:border-purple-500 outline-none transition-all placeholder:text-gray-700"
                />
                <input
                  type="text"
                  placeholder="STREET ADDRESS"
                  className="col-span-2 bg-transparent border border-white/10 p-4 text-[10px] focus:border-purple-500 outline-none transition-all placeholder:text-gray-700"
                />
              </div>
            </section>

            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8 border-b border-white/10 pb-2">
                Payment Method
              </h2>
              <div className="border border-purple-500/30 bg-purple-500/5 p-6 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Pay on Delivery / Mock Payment
                </span>
                <div className="w-4 h-4 border-2 border-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </section>

            <button
              onClick={handleOrder}
              className="w-full bg-white text-black py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-2xl"
            >
              Complete Purchase — ${totalPrice.toFixed(2)}
            </button>
          </div>

          <div className="bg-[#0c0c0c] p-10 h-fit border border-white/5 sticky top-28">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-gray-400">
              Order Review
            </h2>
            <div className="space-y-6 max-h-100 overflow-y-auto pr-4 custom-scrollbar">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-[10px]"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-bold uppercase tracking-widest">
                      {item.title}
                    </span>
                    <span className="text-gray-500 mt-1 uppercase">
                      Qty: {item.quantity}
                    </span>
                  </div>
                  <span className="font-mono text-purple-400">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/10 space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between text-xl font-black uppercase italic">
                <span>Total</span>
                <span className="font-mono text-purple-500">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
