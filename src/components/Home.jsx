import React from "react";

function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#0f0f0f] text-white flex flex-col justify-center px-6 relative">

      {/* 🔥 Background Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>

      {/* 🔹 Heading */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Elevate Your Style With <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Bold Fashion
          </span>
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Discover premium collections curated for modern lifestyle.
        </p>
      </div>

      {/* 🔥 Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-6xl mx-auto h-[65vh] z-10">

        {/* LEFT */}
        <div className="flex flex-col gap-5">
          <Card img="https://images.unsplash.com/photo-1521334884684-d80222895322" />
          <Card img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" />
        </div>

        {/* TALL */}
        <Card
          img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          tall
        />

        {/* CENTER PREMIUM CARD */}
        <div className="relative flex flex-col justify-end rounded-2xl overflow-hidden group">

          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Content */}
          <div className="relative p-5">
            <h2 className="text-xl font-semibold mb-2">
              New Collection
            </h2>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Explore →
            </button>
          </div>

        </div>

        {/* TALL */}
        <Card
          img="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
          tall
        />

        {/* RIGHT */}
        <div className="flex flex-col gap-5">
          <Card img="https://images.unsplash.com/photo-1517841905240-472988babdf9" />
          <Card img="https://images.unsplash.com/photo-1495121605193-b116b5b09a09" />
        </div>

      </div>
    </div>
  );
}

export default Home;


/* 🔥 Reusable Card Component */
function Card({ img, tall }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden group ${
        tall ? "h-full" : "flex-1"
      }`}
    >
      <img
        src={img}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
    </div>
  );
}