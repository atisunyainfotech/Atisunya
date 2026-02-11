"use client";

import Image from "next/image";
import ERPIcon from "@/assets/products/erp.svg";
import TimestampIcon from "@/assets/products/timestamp.svg";
import ChatbotIcon from "@/assets/products/chatbot.svg";

const Products = () => {
  const products = [
    { title: "ERP One", image: ERPIcon },
    { title: "Time Stamp", image: TimestampIcon },
    { title: "Copilot / Chatbot", image: ChatbotIcon },
  ];

  return (
    <section className="py-24 bg-white" id="products">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-[#fbc02d]">Products</span>
        </h2>

        {/* Cards */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            {products.map((item, index) => (
              <div
                key={index}
                className="group relative w-72 h-80 rounded-3xl p-8 
                flex flex-col items-center justify-center
                border-2 border-[#0f172a]
                transition-all duration-500 ease-in-out
                hover:-translate-y-4 hover:scale-105"
                style={{
                  backgroundColor: "#fbc02d",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                {/* Navy Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 
                  group-hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{
                    boxShadow: "0 0 45px rgba(0, 32, 80, 0.6)",
                  }}
                ></div>

                {/* Icon */}
                <div className="relative w-24 h-24 mb-6 z-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain brightness-0 invert"
                    sizes="96px"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-center mb-6 text-[#002050] z-10">
                  {item.title}
                </h3>

                {/* Button */}
                <button
                  className="bg-white text-[#002050] 
                  border-2 border-[#002050] 
                  px-6 py-2 rounded-full 
                  text-sm font-bold 
                  shadow-md 
                  hover:bg-[#002050] hover:text-white
                  hover:shadow-lg hover:scale-105
                  transition-all duration-300 z-10"
                >
                  Explore
                </button>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
