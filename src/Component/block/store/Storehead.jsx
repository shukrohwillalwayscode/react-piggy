import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

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
    <div className="min-h-screen bg-[#f7f9fc] px-4 py-10 pt-36">
      <h1 className="text-4xl font-bold text-center mb-12">
        🛍️ PiggyVest Universal Store
      </h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden group transition hover:shadow-2xl"
          >
            <div
              onClick={() => toggleLike(product.id)}
              className="absolute top-3 right-3 z-10 cursor-pointer text-2xl"
            >
              {likedItems[product.id] ? <FcLike /> : <FcLikePlaceholder />}
            </div>

            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-[200px]">
              <h2 className="text-sm font-semibold text-gray-800">
                {product.title.length > 40
                  ? product.title.slice(0, 40) + "..."
                  : product.title}
              </h2>

              <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full w-fit">
                {product.category}
              </span>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition">
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
