import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, tall }) => (
  <div
    className={`relative rounded-2xl overflow-hidden group w-full ${
      tall ? "h-full" : "h-24 md:flex-1"
    }`}
  >
    <img
      src={img}
      alt="fashion"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
  </div>
);

function Home() {
  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden relative">
      <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 py-16 z-10">
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight uppercase italic">
            Elevate Your Style <br />
            <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Bold Fashion
            </span>
          </h1>

          <p className="text-gray-500 mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
            Premium collections
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 w-full max-w-5xl flex-1">
          <div className="flex md:flex-col gap-2 h-24 md:h-full">
            <Card img="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=735&auto=format&fit=crop" />
            <Card img="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?q=80&w=687&auto=format&fit=crop" />
          </div>

          <div className="hidden sm:block h-full">
            <Card
              img="https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=764&auto=format&fit=crop"
              tall
            />
          </div>

          <div className="relative flex flex-col justify-end rounded-2xl overflow-hidden group h-48 md:h-full border border-white/5 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1616529484837-8bcdf9d1407b?w=600&auto=format&fit=crop&q=60"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              alt="New Collection"
            />
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative p-3">
              <h2 className="text-sm font-black uppercase italic mb-2">
                New <br /> Collection
              </h2>

              <Link to="/shop">
                <button className="w-full bg-white text-black py-1.5 text-[8px] font-black uppercase tracking-widest hover:bg-purple-600 hover:text-white transition">
                  Explore →
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block h-full">
            <Card
              img="https://images.unsplash.com/photo-1619749623747-c256b910961a?w=600&auto=format&fit=crop&q=60"
              tall
            />
          </div>

          <div className="flex md:flex-col gap-2 h-24 md:h-full">
            <Card img="https://images.unsplash.com/photo-1602558618194-3037081afe0d?q=80&w=1154&auto=format&fit=crop" />
            <Card img="https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1189&auto=format&fit=crop" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
