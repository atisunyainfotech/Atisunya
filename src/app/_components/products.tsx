import ERPIcon from "@/assets/products/erp.svg";
import TimestampIcon from "@/assets/products/timestamp.svg";
import WarehouseIcon from "@/assets/products/warehouse.svg";
import ChatbotIcon from "@/assets/products/chatbot.svg";
import RentalIcon from "@/assets/products/rental-management.svg";
import Image from "next/image";

const Products = () => {
  const data = [
    { text: " ERP One", icon: ERPIcon, link: "#" },
    { text: " Hour Flux", icon: TimestampIcon, link: "#" },
    { text: " Vendor WMS", icon: WarehouseIcon, link: "#" },
    { text: " Warehouse Management", icon: RentalIcon, link: "#" },
    { text: " Chatbot / AI", icon: ChatbotIcon, link: "#" },
  ];

  return (
    <section className="py-14" id="products">
      <div className="container">
        <h3 className="text-4xl font-medium text-center">
          Our <span className="text-yellow">Products</span>
        </h3>

        {/* Card Holder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {data.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-md
                         rounded-xl px-6 py-8 flex flex-col items-center justify-between
                         border border-[#ffc533]/60
                         transition-all duration-300
                         hover:-translate-y-1 hover:border-[#ffc533]
                         hover:shadow-[0_0_25px_rgba(255,197,51,0.55)]"
            >
              {/* Icon */}
              <figure className="relative w-16 h-16 mb-4">
                <Image src={item.icon} alt={item.text} fill />
              </figure>

              {/* Title */}
              <h4 className="text-base font-semibold text-center leading-snug">
                {item.text}
              </h4>

              {/* CTA */}
              <span className="mt-4 text-sm text-yellow font-medium opacity-80 group-hover:opacity-100">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
