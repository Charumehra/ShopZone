import React from "react";
import { Link } from "react-router-dom";

  const Card = ({ img, tall }) => (
  <div
    className={`relative rounded-2xl overflow-hidden group ${
      tall ? "h-full" : "flex-1"
    }`}
  >
    <img
  src={img}
  alt="fashion"
  className={`w-full object-cover group-hover:scale-110 transition duration-500 ${
    tall ? "aspect-2/6" : "aspect-square"
  }`}
/>

    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
  </div>
);


function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white flex flex-col justify-center px-6 relative">

      <div className="absolute -top-52 -left-25 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-25 -right-25 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>

      <div className="text-center z-10 mb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Elevate Your Style With <br />
          <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Bold Fashion
          </span>
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Discover premium collections curated for modern lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-6xl mx-auto h-[55vh] z-10">

        <div className="flex flex-col gap-5">
          <Card img="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Card img="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA" />
        </div>

        <Card img="https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" tall />

        <div className="relative flex flex-col justify-end rounded-2xl overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1616529484837-8bcdf9d1407b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          <div className="relative p-5">
            <h2 className="text-xl font-semibold mb-2">
              New Collection
            </h2>
            <Link to="/shop">
              <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
                Explore →
              </button>
            </Link>
          </div>
        </div>

        <Card img="https://images.unsplash.com/photo-1619749623747-c256b910961a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D" tall />

        <div className="flex flex-col gap-5">
          <Card img="https://images.unsplash.com/photo-1602558618194-3037081afe0d?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Card img="https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>

      </div>
    </div>
  );
}

export default Home;