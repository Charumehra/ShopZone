import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart, addToCart, decrementQuantity, totalPrice } = useContext(CartContext);

  if (cart.length === 0) return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center space-y-6">
      <h2 className="text-xl font-light uppercase tracking-widest">Bag is Empty</h2>
      <Link to="/shop" className="border border-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest">Shop Collections</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black uppercase mb-12 italic tracking-tighter">Your Bag</h1>
        
        <div className="space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b border-white/5 py-8">
              <div className="flex gap-8 items-center">
                <img src={item.thumbnail} className="w-20 h-20 object-contain bg-[#111] border border-white/5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest">{item.title}</p>
                  <div className="flex items-center gap-6 mt-4 text-gray-500">
                    <button onClick={() => decrementQuantity(item.id)} className="hover:text-white transition-colors">—</button>
                    <span className="text-white font-mono text-sm">{item.quantity}</span>
                    <button onClick={() => addToCart(item)} className="hover:text-white transition-colors">+</button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-[9px] text-red-500 uppercase font-black tracking-[0.2em] mt-4 hover:text-red-400 transition-colors">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col items-end space-y-6">
          <div className="text-right">
            <p className="text-gray-500 uppercase text-[10px] font-black tracking-[0.4em] mb-2">Total Amount</p>
            <p className="text-4xl font-bold font-mono text-purple-500">${totalPrice.toFixed(2)}</p>
          </div>
          
          <Link 
            to="/checkout" 
            className="w-full md:w-80 bg-white text-black text-center py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-2xl"
          >
            Checkout Securely
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;