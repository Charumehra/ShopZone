import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Shop() {
    const [products, setProducts] = useState([]); 

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=> setProducts(data.products))
        .catch((err)=> alert("Error fetching products: " + err.message));
    },[])
  return (
    <div className='bg-black '>
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link to={`/product/:${item.id}`} key={item.id}>
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">
                {item.description}
              </p>

              <div className="mt-3 flex justify-between items-center">
                <span className="font-bold text-blue-600">
                  ${item.price}
                </span>
                <span className="text-sm text-gray-500">
                   {item.rating}
                </span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Shop