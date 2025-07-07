import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e2e8f0] px-4 py-10 pt-36">
      <h1 className="text-5xl font-extrabold text-center mb-14 text-gray-800">
        🛍️ PiggyVest Universal Store
      </h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-400"
          >
            <div
              onClick={() => toggleLike(product.id)}
              className="absolute top-4 right-4 z-10 cursor-pointer text-2xl transition-transform duration-300 hover:scale-110"
            >
              {likedItems[product.id] ? <FcLike /> : <FcLikePlaceholder />}
            </div>

            <div className="w-full h-60 bg-gray-50 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-[220px]">
              <h2 className="text-base font-semibold text-gray-900 mb-2">
                {product.title.length > 40
                  ? product.title.slice(0, 40) + "..."
                  : product.title}
              </h2>

              <span className="text-xs border border-blue-500 text-blue-600 px-2 py-0.5 rounded-full w-fit mb-2 uppercase tracking-wide font-medium">
                {product.category}
              </span>

              <div className="mt-auto flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
                <button className="flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  <FiShoppingCart className="text-base" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
