import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) =>
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-10 pt-36">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        🛍️ PiggyVest Universal Store
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col"
          >
            <div
              onClick={() => toggleLike(p.id)}
              className="absolute top-4 right-4 cursor-pointer text-2xl hover:scale-110 transition"
            >
              {likedItems[p.id] ? <FcLike /> : <FcLikePlaceholder />}
            </div>
            <div className="flex items-center justify-center h-48 mb-4">
              <img
                src={p.thumbnail || p.images?.[0]}
                alt={p.title}
                className="max-h-full object-contain transition-transform hover:scale-105"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {p.title.length > 50 ? p.title.slice(0, 50) + "…" : p.title}
            </h2>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-gray-800">
                ${p.price}
              </span>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
